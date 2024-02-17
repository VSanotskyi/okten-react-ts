import {IResponse} from '../types';
import {IPost} from '../interfaces';
import {apiService} from './apiService';
import {urls} from '../constants';

const postServices = {
    getAll: (): IResponse<IPost[]> => apiService.get(urls.posts.base),
    getById: (id: number): IResponse<IPost> => apiService.get(urls.posts.byId(id)),
};

export {
    postServices,
};