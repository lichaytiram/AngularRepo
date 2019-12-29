import { IPizzaState } from 'src/app/shared/models/pizzaState.model';
import * as fromPizzas from '../actions/pizzas.action'
import { createReducer, on } from '@ngrx/store';

export const initialState: IPizzaState = {
    data: [],
    loaded: false,
    loading: false
}

export const reducer = createReducer<IPizzaState>(
    initialState, on(
        fromPizzas.LoadPizzas, state => {
            return {
                ...state,
                loading: true
            }
        }
    ), on(
        fromPizzas.LoadPizzasSuccess, state => {
            return {
                ...state,
                loaded: true,
                loading: false
            }
        }
    ), on(
        fromPizzas.LoadPizzasFail, state => {
            return {
                ...state,
                loaded: false,
                loading: false
            }
        }
    )

)