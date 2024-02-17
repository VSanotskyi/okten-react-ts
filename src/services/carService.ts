import {apiServices} from './apiServices';
import {carsUrls} from '../constants/urls';
import {ICar, IRes} from '../types/carTypes';

const carService = {
    getAll: (): IRes<ICar[]> => apiServices.get(carsUrls.base),
    add: (data: Omit<ICar, 'id'>): IRes<ICar> => apiServices.post(carsUrls.base, data),
    updateById: (id: number, data: ICar): IRes<ICar> => apiServices.put(carsUrls.byId(id), data),
    deleteById: (id: number): IRes<void> => apiServices.delete(carsUrls.byId(id)),
};

export {carService};