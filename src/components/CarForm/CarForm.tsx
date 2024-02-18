import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import {carServices} from '../../services/carServices';
import {ICar} from '../../interfaces/carInterface';
import {ISetState} from '../../types/setStateType';
import css from './CarForm.module.css';

interface IProps extends PropsWithChildren {
    setIsUpdate: (prev: boolean) => void;
    setCarForUpdate: ISetState<ICar | null>;
    carForUpdate: ICar | null;
}

const CarForm: FC<IProps> = ({setIsUpdate, carForUpdate, setCarForUpdate}) => {
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const {reset, handleSubmit, register, setValue} = useForm<ICar>();

    const save: SubmitHandler<ICar> = async (car) => {
        setIsLoading(true);
        try {
            await carServices.create(car);
            setIsUpdate(true);
            reset();
        } catch (error) {
            const e = error as Error;
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };

    const update: SubmitHandler<ICar> = async (car) => {
        setIsLoading(true);
        try {
            if (carForUpdate) await carServices.updateById(carForUpdate.id, car);
            setCarForUpdate(null);
            setIsUpdate(true);
            reset();
        } catch (error) {
            const e = error as Error;
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue]);

    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error.message}</h2>}
            <form className={css.form}
                  onSubmit={handleSubmit(carForUpdate ? update : save)}
            >
                <label>
                    Brand
                    <br/>
                    <input className={css.input}
                           type="text" {...register('brand')}/>
                </label>
                <label>
                    Price
                    <br/>
                    <input className={css.input}
                           type="text" {...register('price')}/>
                </label>
                <label>
                    Year
                    <br/>
                    <input className={css.input}
                           type="text" {...register('year')}/>
                </label>
                <button className={css.btn}>{carForUpdate ? 'update' : 'save'}</button>
            </form>
        </div>
    );
};

export default CarForm;