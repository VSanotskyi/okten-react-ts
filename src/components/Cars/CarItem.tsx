import {FC, PropsWithChildren} from 'react';

import {carForUpdateAction} from '../../store/slice/carSlice';
import {useAppDispatch} from '../../hooks';
import {ICar} from '../../interfaces';

interface IProps extends PropsWithChildren {
    car: ICar;
}

const CarItem: FC<IProps> = ({car}) => {
    const dispatch = useAppDispatch();

    const {id, year, brand, price} = car;

    const handleDelete = () => {

    };

    const handleUpdate = () => {
        dispatch(carForUpdateAction(car));
    };

    return (
        <li>
            <p>id: {id}</p>
            <p>year: {year}</p>
            <p>brand: {brand}</p>
            <p>price: {price}</p>
            <button onClick={handleUpdate}>update</button>
            <button onClick={handleDelete}>delete</button>
        </li>
    );
};

export {CarItem};