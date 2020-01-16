import { reducer } from "./pizzas.reducer";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { IProductesState } from "src/app/shared/models/productesState.model";

import { IPizzaState } from "src/app/shared/models/pizzaState.model";

export const reducers: ActionReducerMap<IProductesState> = {
  pizzas: reducer
};

// pizzas feature
export const createPizzaFeature = createFeatureSelector<IPizzaState>("pizzas");
