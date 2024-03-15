import axios, {AxiosError} from 'axios';

import {baseURL, urls} from '../constants';
import {authService} from './authService';
import {router} from '../router';

let isRefresh = false;

type IWaitList = () => void

const waitList: IWaitList[] = [];

const apiService = axios.create({baseURL});

apiService.interceptors.request.use(req => {
    const accessToken = authService.getAccessToken();

    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
    }

    return req;
});

apiService.interceptors.response.use(
    res => res,
    async (err: AxiosError) => {
        const axiosRequestConfig = err.config;

        if (err.response.status === 401) {
            if (!isRefresh) {
                isRefresh = true;
                try {
                    await authService.refresh();
                    isRefresh = false;
                    runAfterRefresh();
                    return apiService(axiosRequestConfig);
                } catch (error) {
                    authService.deleteTokens();
                    isRefresh = false;
                    router.navigate('/login?sessionExpired=true');
                    return Promise.reject(err);
                }
            }

            if (axiosRequestConfig.url === urls.auth.refresh) {
                return Promise.reject(err);
            }

            return new Promise(res => {
                subscribeToWaitList(() => {
                    res(apiService(axiosRequestConfig));
                });
            });
        }

        return Promise.reject(err);
    },
);

const subscribeToWaitList = (cb: IWaitList): void => {
    waitList.push(cb);
};

const runAfterRefresh = (): void => {
    while (waitList.length) {
        const cb = waitList.pop();
        cb();
    }
};

export {
    apiService,
};