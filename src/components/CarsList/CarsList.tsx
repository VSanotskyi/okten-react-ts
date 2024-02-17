import {ICar} from '../../types/carTypes';
import {FC} from 'react';
import CarItem from '../CarItem/CarItem';

interface CarsListProps {
    cars: ICar[];
}

const CarsList: FC<CarsListProps> = ({cars}) => {
    return (
        <ul>
            {cars.map(car => <CarItem key={car.id}
                                      car={car}
            />)}
        </ul>
    );
};

export default CarsList;