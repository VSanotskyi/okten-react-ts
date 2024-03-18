import {RootState} from '../../types/reduxType';

export const selectCars = (state: RootState) => state.cars.items;
export const selectCarForUpdate = (state: RootState) => state.cars.carForUpdate;
export const selectTrigger = (state: RootState) => state.cars.trigger;
export const selectError = (state: RootState) => state.cars.error;
export const selectLoading = (state: RootState) => state.cars.loading;
