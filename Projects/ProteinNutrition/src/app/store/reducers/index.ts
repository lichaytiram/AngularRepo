import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { IProteinState, proteinReducer } from './protein.reducer';
import { IUserState, userReducer } from './user.reducer';

export interface IProductsState {
    user: IUserState,
    protein: IProteinState
};

export const reducers: ActionReducerMap<IProductsState> = {
    user: userReducer,
    protein: proteinReducer
};

export const getProductsState = createFeatureSelector<IProductsState>("products");