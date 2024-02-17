import {IResponse} from '../types';
import {IUser} from '../interfaces';
import {apiService} from './apiService';
import {urls} from '../constants';

const userService = {
    getAll: (): IResponse<IUser[]> => apiService.get(urls.users.base),
    getById: (id: number): IResponse<IUser> => apiService.get(urls.users.byId(id)),
};

export {
    userService,
};