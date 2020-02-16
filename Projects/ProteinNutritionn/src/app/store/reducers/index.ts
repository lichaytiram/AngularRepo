import { IProteinState, proteinReducer } from './protein.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';


export interface IProductsState {
    protein: IProteinState
};

export const reducers: ActionReducerMap<IProductsState> = {
    protein: proteinReducer
};

export const getProductsState = createFeatureSelector<IProductsState>("products");