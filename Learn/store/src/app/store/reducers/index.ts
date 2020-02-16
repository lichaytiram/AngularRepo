import { reducer, IPizzaState } from "./pizzas.reducer";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

export interface IProductsState {
  pizzas: IPizzaState;
};

export const reducers: ActionReducerMap<IProductsState> = {
  pizzas: reducer
};

export const getProductsState = createFeatureSelector<IProductsState>("products");