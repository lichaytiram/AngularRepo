import { reducer } from './pizzas.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { IProductesState } from 'src/app/shared/models/productesState.model';
import * as fromPizzas from '../reducers/pizzas.reducer'

export const reducers: ActionReducerMap<IProductesState> = {
    pizzas: reducer
}

// export const getPizzasState = (state: IProductesState) => state.pizzas;

// export const x1 = createSelector(
//     getPissaState,
//     (state: IProductesState) => state.pizzas
// );

export const selectFeature = createFeatureSelector<IProductesState>("pizzas");

export const selectFeatureState = createSelector(
    selectFeature,
    (state: IProductesState) => {
        console.log("1");
        console.log(state);
        return state.pizzas
    }
);

export const selectPizzaEntities = createSelector(
    selectFeatureState,
    (state) => {
    console.log(state);
    return fromPizzas.getPizzasEntities
    }
);

export const selectFeaturePizzas = createSelector(
    selectPizzaEntities,
    (entities) => {
        console.log(entities);
        return Object.keys(entities).map(id => entities[parseInt(id)])
    }
);