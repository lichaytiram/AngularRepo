import { createSelector } from "@ngrx/store";
import * as fromFeature from "../reducers";
import { IPizza } from "src/app/shared/models/Pizza.model";
import * as fromPizzas from "../reducers/pizzas.reducer";

export const getPizzasEntities = createSelector(
  fromFeature.createPizzaFeature,
  fromPizzas.getPizzasEntities
);

export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities: { [id: number]: IPizza }) => Object.keys(entities).map(id => entities[parseInt(id)])
);
