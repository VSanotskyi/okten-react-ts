import {createAsyncThunk, createSlice, isFulfilled} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

import {IAuth, IUser} from '../../interface';
import {authService} from '../../services';

interface IState {
    registerError: string;
    loginError: string;
    currentUser: IUser;
}

const initialState: IState = {
    registerError: null,
    loginError: null,
    currentUser: null,
};

const registerThunk = createAsyncThunk<void, { user: IAuth }>(
    'authSlice/register',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.register(user);
        } catch (error) {
            const e = error as AxiosError;
            return rejectWithValue(e.response.data);
        }
    },
);

const loginThunk = createAsyncThunk<IUser, { user: IAuth }>(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            return await authService.login(user);
        } catch (error) {
            const e = error as AxiosError;
            return rejectWithValue(e.response.data);
        }
    },
);

const meThunk = createAsyncThunk<IUser, void>(
    'authSlice/me',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await authService.me();
            return data;
        } catch (error) {
            const e = error as AxiosError;
            return rejectWithValue(e.response.data);
        }
    },
);

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loginThunk.fulfilled, (state, {payload}) => {
                state.currentUser = payload;
            })
            .addCase(registerThunk.rejected, state => {
                state.registerError = 'username already existed';
            })
            .addCase(loginThunk.rejected, (state) => {
                state.loginError = 'Name or password error';
            })
            .addCase(meThunk.fulfilled, (state, {payload}) => {
                state.currentUser = payload;
            })
            .addMatcher(isFulfilled(registerThunk, loginThunk), state => {
                state.registerError = null;
                state.loginError = null;
            });
    },
});

const authReducer = authSlice.reducer;

export {
    authReducer,
    registerThunk,
    loginThunk,
    meThunk,
};