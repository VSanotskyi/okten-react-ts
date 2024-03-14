import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

import {ICar, IPagination} from '../../interface';
import {carService} from '../../services';

interface IState {
    cars: ICar[];
}

const initialState: IState = {
    cars: [],
};

const carsThunk = createAsyncThunk<IPagination<ICar>, void>(
    'carSlice/carsThunk',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (error) {
            const e = error as AxiosError;
            return rejectWithValue(e.response.data);
        }
    },
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(carsThunk.fulfilled, (state, {payload}) => {
                state.cars = payload.items;
            });
    },
});

const carReducer = carSlice.reducer;

export {
    carReducer,
    carsThunk,
};