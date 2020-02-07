import { createSelector } from "@ngrx/store";
import { IPizza } from "src/app/shared/models/Pizza.model";
import { getRouterState } from '../../storeRouter/reducers'

import * as fromFeature from "../reducers";
import * as fromPizzas from "../reducers/pizzas.reducer";

export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (pizzaState: fromFeature.IProductesState) => pizzaState.pizzas
);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getAllPizzas);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  getRouterState,
  (entities, router): IPizza => {
    return router.state && entities[parseInt(router.state.params.pizzaId)];
  }
);