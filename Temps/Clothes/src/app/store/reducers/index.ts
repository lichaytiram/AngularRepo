import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { cartReducer, ICartState } from './cart.reducer';
import { clotheReducer, IClotheState } from './clothe.reducer';

export interface IProductsState {
    clothe: IClotheState,
    cart: ICartState
};

export const reducers: ActionReducerMap<IProductsState> = {
    clothe: clotheReducer,
    cart: cartReducer
};

export const getProductsState = createFeatureSelector<IProductsState>("products");