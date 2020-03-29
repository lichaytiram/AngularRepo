import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { IProteinState, proteinReducer } from './protein.reducer';
import { IRegisterState, userReducer } from './user.reducer';

export interface IProductsState {
    user: IRegisterState,
    protein: IProteinState
};

export const reducers: ActionReducerMap<IProductsState> = {
    user: userReducer,
    protein: proteinReducer
};

export const getProductsState = createFeatureSelector<IProductsState>("products");