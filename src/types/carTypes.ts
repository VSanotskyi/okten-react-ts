import {Dispatch, SetStateAction} from 'react';
import {AxiosResponse} from 'axios';

export interface ICar {
    id: number;
    brand: string;
    price: string;
    year: string;
}

export type IRes<T> = Promise<AxiosResponse<T>>

export type ISetState<T> = Dispatch<SetStateAction<T>>