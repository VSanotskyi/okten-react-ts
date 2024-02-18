import {FC, PropsWithChildren} from 'react';

import {ICar} from '../../../interfaces/carInterface';
import {ISetState} from '../../../types/setStateType';
import {carServices} from '../../../services/carServices';

interface IProps extends PropsWithChildren {
    car: ICar;
    setCarForUpdate: ISetState<ICar | null>;
    setIsUpdate: (prev: boolean) => void;
}

const CarItem: FC<IProps> = ({car, setCarForUpdate, setIsUpdate}) => {
    const {id, brand, price, year} = car;

    const handleDel = async () => {
        try {
            await carServices.deleteById(id);
            setIsUpdate(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <li>
            <p>{id}. {brand}, {price}$, {year}yr</p>
            <button type="button"
                    onClick={handleDel}
            >delete
            </button>
            <button onClick={() => setCarForUpdate(car)}>update</button>
        </li>
    );
};

export default CarItem;