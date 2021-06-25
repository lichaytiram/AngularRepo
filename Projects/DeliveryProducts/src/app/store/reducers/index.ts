import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { IProductState, productReducer } from './product.reducer';

export interface IProductsState {
    product: IProductState
};

export const reducers: ActionReducerMap<IProductsState> = {
    product: productReducer
};

export const getProductsState = createFeatureSelector<IProductsState>("products");