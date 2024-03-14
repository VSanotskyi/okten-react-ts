import {useAppDispatch, useAppSelector} from '../../hooks';
import {CarItem} from './CarItem';
import {useEffect} from 'react';
import {carsThunk} from '../../store';

const CarsList = () => {
    const {cars} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carsThunk());
    }, []);

    return (
        <div>
            {cars.map(car => <CarItem key={car.id}
                                      car={car}
            />)}
        </div>
    );
};

export {CarsList};