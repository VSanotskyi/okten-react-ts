import {IRes} from '../types';
import {ICar, IPagination} from '../interface';
import {apiService} from './apiService';
import {urls} from '../constants';

export const carService = {
    getAll: (): IRes<IPagination<ICar>> => {
        return apiService.get(urls.cars.base);
    },
};