import {useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import {createCarThunk, selectCarForUpdate} from '../../store';
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

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue]);

    return (
        <form onSubmit={handleSubmit(handleAddCar)}>
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