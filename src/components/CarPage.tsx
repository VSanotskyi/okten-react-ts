import {useEffect, useState} from 'react';

import {ICar} from '../types/carTypes';
import {carService} from '../services/carService';
import CarsList from './CarsList/CarsList';
import CarForm from './CarForm/CarForm';

const CarPage = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getAllCars();
    }, []);

    const getAllCars = async () => {
        try {
            const {data} = await carService.getAll();
            setCars(data);
        } catch (error) {
            console.error(error);
        }
    };

    const addCar = async (car: Omit<ICar, 'id'>) => {
        try {
            const res = await carService.add(car);
            if (res) {
                setCars(prev => [...prev, res]);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <CarForm addCar={addCar}/>
            {cars && <CarsList cars={cars}/>}
        </div>
    );
};

export default CarPage;