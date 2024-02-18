import {apiServices} from './apiServices';
import {urls} from '../constants/urls';
import {ICar} from '../interfaces/carInterface';
import {IRes} from '../types/responseType';

const carServices = {
    getAll: (): IRes<ICar[]> => apiServices.get(urls.cars.base),
    getById: (id: number): IRes<ICar> => apiServices.get(urls.cars.byid(id)),
    create: (data: ICar): IRes<ICar> => apiServices.post(urls.cars.base, data),
    updateById: (id: number, data: ICar): IRes<ICar> => apiServices.put(urls.cars.byid(id), data),
    deleteById: (id: number): IRes<void> => apiServices.delete(urls.cars.byid(id)),
};

export {
    carServices,
};