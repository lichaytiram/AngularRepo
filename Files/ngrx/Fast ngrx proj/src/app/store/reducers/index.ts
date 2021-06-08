import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface IProductsState {
    
};

export const reducers: ActionReducerMap<IProductsState> = {

};

export const getProductsState = createFeatureSelector<IProductsState>("products");