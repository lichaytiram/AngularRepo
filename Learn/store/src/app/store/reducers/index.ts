import { reducer } from './pizzas.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { ProductesState } from 'src/app/shared/models/productesState.model';

export const reducers: ActionReducerMap<ProductesState> = {
    pizzas: reducer
}