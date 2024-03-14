import {configureStore} from '@reduxjs/toolkit';
import {loadingReducer} from './slices/loadingSlice';
import {authReducer} from './slices/authSlice';
import {carReducer} from './slices/carSlice';

export const store = configureStore({
    reducer: {
        loadingReducer,
        authReducer,
        carReducer,
    },
});