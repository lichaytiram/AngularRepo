import { reducer } from './pizzas.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { IProductesState } from 'src/app/shared/models/productesState.model';
import * as fromPizzas from '../reducers/pizzas.reducer'
import { IPizzaState } from 'src/app/shared/models/pizzaState.model';

export const reducers: ActionReducerMap<IProductesState> = {
    pizzas: reducer
}

export const createFeature = createFeatureSelector<IPizzaState>("pizzas");

// pizzas state
export const getPizzaState = createSelector(createFeature, (state: IPizzaState) => state.entities);

export const getAllPizzas = createSelector(
    getPizzaState,
    (entities) => Object.keys(entities).map(id => entities[parseInt(id)])
);