import { reducer } from './pizzas.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { IProductesState } from 'src/app/shared/models/productesState.model';

export const reducers: ActionReducerMap<IProductesState> = {
    pizzas: reducer
}

// export const getPizzasState = (state: IProductesState) => state.pizzas;

// export const x1 = createSelector(
//     getPissaState,
//     (state: IProductesState) => state.pizzas
// );


export const selectFeature = createFeatureSelector<IProductesState>("featureKey");

export const selectFeatureState = createSelector(
    selectFeature,
    (state: IProductesState) => {
        console.log("1");
        return state.pizzas
    }
);

export const selectFeaturePizzas = createSelector(
    selectFeatureState,
    (entities) => {
        console.log("2");
        
        return Object.keys(entities).map(id => console.log("try"))
    }
);