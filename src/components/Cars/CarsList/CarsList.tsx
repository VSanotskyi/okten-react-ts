import {FC, PropsWithChildren} from 'react';

import {ICar} from '../../../interfaces/carInterface';
import {ISetState} from '../../../types/setStateType';
import CarItem from '../CarItem/CarItem';

interface IProps extends PropsWithChildren {
    cars: ICar[];
    setCarForUpdate: ISetState<ICar | null>;
    setIsUpdate: (prev: boolean) => void;
}

const CarsList: FC<IProps> = ({cars, setCarForUpdate, setIsUpdate}) => {
    return (
        <ul>
            {cars.map(car => <CarItem key={car.id}
                                      car={car}
                                      setCarForUpdate={setCarForUpdate}
                                      setIsUpdate={setIsUpdate}
            />)}
        </ul>
    );
};

export default CarsList;