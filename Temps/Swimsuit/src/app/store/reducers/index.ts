import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ISwimsuitState, swimsuitReducer } from './swimsuit.reducer';

export interface IProductsState {
    swimsuit: ISwimsuitState
};

export const reducers: ActionReducerMap<IProductsState> = {
    swimsuit: swimsuitReducer
};

export const getProductsState = createFeatureSelector<IProductsState>("products");