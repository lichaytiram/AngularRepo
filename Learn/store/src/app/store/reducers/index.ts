import { reducer } from './pizzas.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { IProductesState } from 'src/app/shared/models/productesState.model';

export const reducers: ActionReducerMap<IProductesState> = {
    pizzas: reducer
}