import { createSelector } from "@ngrx/store";
import { IPizza } from "src/app/shared/models/Pizza.model";
import { IProductesState } from 'src/app/shared/models/productesState.model';

import * as fromFeature from "../reducers";
import * as fromPizzas from "../reducers/pizzas.reducer";

export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (pizzaState: IProductesState) => pizzaState.pizzas
)

export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
);

export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities: { [id: number]: IPizza }) => Object.keys(entities).map(id => entities[parseInt(id)])
);

export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
