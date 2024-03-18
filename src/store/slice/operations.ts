import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

import {createCar, delById, getAll, updateById} from '../../services';
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

const updateCarThunk = createAsyncThunk<void, { car: ICar, id: number }>(
    'carSlice/update',
    async ({car, id}, {rejectWithValue}) => {
        try {
            console.log(car);
            await updateById(id, car);
        } catch (error) {
            const e = error as AxiosError;
            return rejectWithValue(e.message);
        }
    },
);

const deleteCarThunk = createAsyncThunk<void, { id: number }>(
    'carSlice/delete',
    async ({id}, {rejectWithValue}) => {
        try {
            await delById(id);
        } catch (error) {
            const e = error as AxiosError;
            return rejectWithValue(e.message);
        }
    },
);

export {
    getCarsThunk,
    createCarThunk,
    updateCarThunk,
    deleteCarThunk,
};