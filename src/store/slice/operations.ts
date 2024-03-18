import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

import {createCar, getAll} from '../../services';
import {ICar} from '../../interfaces';

const getCarsThunk = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            return await getAll();
        } catch (error) {
            const e = error as AxiosError;
            return rejectWithValue(e.message);
        }
    },
);

const createCarThunk = createAsyncThunk<void, { car: ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            await createCar(car);
        } catch (error) {
            const e = error as AxiosError;
            return rejectWithValue(e.message);
        }
    },
);

export {
    getCarsThunk,
    createCarThunk,
};