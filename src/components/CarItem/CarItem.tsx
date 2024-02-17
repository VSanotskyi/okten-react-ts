import {ICar} from '../../types/carTypes';
import {FC} from 'react';

interface CarItemProps {
    car: ICar;
}

const CarItem: FC<CarItemProps> = ({car}) => {

    return (
        <li>
            <p>brand: {car.brand}</p>
            <p>price: {car.price}</p>
            <p>year: {car.year}</p>
        </li>
    );
};

export default CarItem;