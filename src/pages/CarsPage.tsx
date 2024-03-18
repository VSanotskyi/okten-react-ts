import {useEffect} from 'react';

import {getCarsThunk, selectCars, selectError, selectLoading, selectTrigger} from '../store';
import {useAppDispatch, useAppSelector} from '../hooks';
import {CarForm, CarItem, List} from '../components';
import {ICar} from '../interfaces';

const CarsPage = () => {
    const dispatch = useAppDispatch();

    const cars = useAppSelector(selectCars);
    const error = useAppSelector(selectError);
    const loading = useAppSelector(selectLoading);
    const trigger = useAppSelector(selectTrigger);

    useEffect(() => {
        dispatch(getCarsThunk());
    }, [dispatch, trigger]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {Error && <p>{error}</p>}
            <CarForm/>
            <hr/>
            {cars.length > 0 && (
                <List items={cars}
                      renderItem={(item: ICar) => (
                          <CarItem key={item.id}
                                   car={item}
                          />)}
                />)}
        </div>
    );
};

export {CarsPage};