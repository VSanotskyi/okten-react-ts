import {FC, useEffect, useState} from 'react';

import {ICar} from '../interfaces/carInterface';
import {carServices} from '../services/carServices';
import CarForm from './CarForm/CarForm';
import CarsList from './Cars/CarsList/CarsList';

const CarContainer: FC = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [carForUpdate, setCarForUpdate] = useState<ICar | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isUpdate, setIsUpdate] = useState<boolean>(false);

    const getAllCars = async () => {
        setIsLoading(true);
        try {
            const {data} = await carServices.getAll();
            setError(null);
            setCars(data);
            setIsUpdate(false);
        } catch (error) {
            const e = error as Error;
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAllCars();
    }, [isUpdate]);

    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error.message}</h2>}
            <CarForm setIsUpdate={setIsUpdate}
                     setCarForUpdate={setCarForUpdate}
                     carForUpdate={carForUpdate}
            />
            <hr/>
            {cars.length > 0 && <CarsList cars={cars}
                                          setCarForUpdate={setCarForUpdate}
                                          setIsUpdate={setIsUpdate}
            />}
        </div>
    );
};

export default CarContainer;