import {FC, PropsWithChildren} from 'react';

import {ICar} from '../../interface';

interface IProps extends PropsWithChildren {
    car: ICar;
}

const CarItem: FC<IProps> = ({car}) => {
    const {id, year, brand, price} = car;

    return (
        <div>
            <p>id: {id}</p>
            <p>year: {year}</p>
            <p>brand: {brand}</p>
            <p>price: {price}</p>
        </div>
    );
};

export {CarItem};