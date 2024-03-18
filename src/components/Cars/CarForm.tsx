import {useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import {createCarThunk, selectCarForUpdate, updateCarThunk} from '../../store';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {ICar} from '../../interfaces';

const CarForm = () => {
    const dispatch = useAppDispatch();
    const carForUpdate = useAppSelector(selectCarForUpdate);

    const {register, reset, handleSubmit, setValue} = useForm<ICar>();

    const handleAddCar: SubmitHandler<ICar> = (car) => {
        dispatch(createCarThunk({car}));
        reset();
    };

    const handleUpdateCar: SubmitHandler<ICar> = (car) => {
        dispatch(updateCarThunk({car, id: carForUpdate.id}));
        reset();
    };

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue]);

    return (
        <form onSubmit={carForUpdate ? handleSubmit(handleUpdateCar) : handleSubmit(handleAddCar)}>
            <input type="text"
                   placeholder={'brand'} {...register('brand')} />
            <input type="text"
                   placeholder={'price'} {...register('price')} />
            <input type="text"
                   placeholder={'year'} {...register('year')} />
            <button> {carForUpdate ? 'Update' : 'Add'}</button>
        </form>
    );
};

export {CarForm};