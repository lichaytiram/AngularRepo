import { IPizzaState } from 'src/app/shared/models/pizzaState.model';
import * as fromPizzas from '../actions/pizzas.action'
import { createReducer, on } from '@ngrx/store';

export const initialState: IPizzaState = {
    data: [
        {
            "id": 3,
            "name": "non"
        }
    ],
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
        fromPizzas.LoadPizzasSuccess, (state, action) => {
            const data = action.pizza;
            return {
                ...state,
                loaded: true,
                loading: false,
                data
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