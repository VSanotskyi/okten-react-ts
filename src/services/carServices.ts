import {apiService} from './apiService';
import {urls} from '../constants';
import {ICar} from '../interfaces';

const getAll = async (): Promise<ICar[]> => {
    const {data} = await apiService.get(urls.cars.base);
    console.log('getAll', data);
    return data;
};

const createCar = async (car: ICar): Promise<ICar> => {
    const {data} = await apiService.post(urls.cars.base, car);
    console.log('create', data);
    return data;
};

const updateById = async (id: number, car: ICar): Promise<ICar> => {
    const {data} = await apiService.put(urls.cars.ById(id), car);
    console.log('updateById', data);
    return data;
};

const delById = async (id: number): Promise<void> => {
    const res = await apiService.delete(urls.cars.ById(id));
    console.log('delById', res);
};

export {
    getAll,
    createCar,
    updateById,
    delById,
};