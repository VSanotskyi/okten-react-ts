import {ICar} from '../../types/carTypes';
import React, {FC, useState} from 'react';

interface ICarFormProps {
    addCar: (car: Omit<ICar, 'id'>) => void;
}

const initState = {
    brand: '',
    price: '',
    year: '',
};

const CarForm: FC<ICarFormProps> = ({addCar}) => {
    const [car, setCar] = useState(initState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {name, value}} = e;
        setCar(prevState => ({...prevState, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addCar(car);
        setCar(initState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Brand
                <input type="text"
                       name="brand"
                       value={car.brand}
                       onChange={handleChange}
                />
            </label>
            <label>
                Price
                <input type="text"
                       name="price"
                       value={car.price}
                       onChange={handleChange}
                />
            </label>
            <label>
                Year
                <input type="text"
                       name="year"
                       value={car.year}
                       onChange={handleChange}
                />
            </label>
            <button>Add</button>
        </form>
    );
};

export default CarForm;