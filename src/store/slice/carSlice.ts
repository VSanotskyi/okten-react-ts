import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICar} from '../../interfaces';
import {createCarThunk, getCarsThunk} from './operations';

interface IState {
    items: ICar[];
    carForUpdate: ICar;
    trigger: boolean;
    error: any;
    loading: boolean;
}

const initialState: IState = {
    items: [],
    carForUpdate: null,
    trigger: false,
    error: null,
    loading: false,
};

const handlePending = (state: IState) => {
    state.error = null;
    state.loading = true;
};

const handleRejected = (state: IState, action: PayloadAction<any>) => {
    state.loading = false;
    state.error = action.payload;
};

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        carForUpdateAction: (state, action) => {
            state.carForUpdate = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            // pending
            .addCase(getCarsThunk.pending, handlePending)
            .addCase(createCarThunk.pending, handlePending)
            // fulfilled
            .addCase(getCarsThunk.fulfilled, (state, action: PayloadAction<ICar[]>) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(createCarThunk.fulfilled, state => {
                state.trigger = !state.trigger;
            })
            // rejected
            .addCase(getCarsThunk.rejected, handleRejected)
            .addCase(createCarThunk.rejected, handleRejected);
    },
});

export const carReducer = carSlice.reducer;
export const {carForUpdateAction} = carSlice.actions;