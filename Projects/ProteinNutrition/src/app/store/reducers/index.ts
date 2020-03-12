import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { IProteinState, proteinReducer } from './protein.reducer';
import { IRegisterState, userReducer } from './user.reducer';

export interface IProductsState {
    protein: IProteinState,
    user: IRegisterState
};

export const reducers: ActionReducerMap<IProductsState> = {
    protein: proteinReducer,
    user: userReducer
};

export const getProductsState = createFeatureSelector<IProductsState>("products");