import { reducer, IPizzaState } from "./pizzas.reducer";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

export interface IProductesState {
  pizzas: IPizzaState;
}

export const reducers: ActionReducerMap<IProductesState> = {
  pizzas: reducer
};

export const getProductsState = createFeatureSelector<IProductesState>("products");
