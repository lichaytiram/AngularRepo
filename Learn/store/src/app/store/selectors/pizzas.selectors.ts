import { createSelector } from "@ngrx/store";
import { IPizza } from "src/app/shared/models/Pizza.model";
import { getRouterState } from '../../storeRouter/reducers'

import * as fromFeature from "../reducers";
import * as fromPizzas from "../reducers/pizzas.reducer";

export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (pizzaState: fromFeature.IProductesState) => pizzaState.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  getRouterState,
  (entities, router): IPizza => {
    return router.state && entities[router.state.params.pizzaId];
  }
)

export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities: { [id: number]: IPizza }) => Object.keys(entities).map(id => entities[parseInt(id)])
);

export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
