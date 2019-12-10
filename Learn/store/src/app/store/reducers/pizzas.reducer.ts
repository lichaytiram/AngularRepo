import { PizzaState } from 'src/app/shared/models/pizzaState.model';
import * as fromPizzas from '../actions/pizzas.action'

export const initialState: PizzaState = {
    data: [],
    loaded: false,
    loading: false
}

export function reducer
    (state: PizzaState = initialState, action: fromPizzas.PizzasAction): PizzaState {

    switch (action.type) {

        case fromPizzas.LOAD_PIZZAS: {
            return {
                ...state,
                loading: true
            }
        }

        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            return {
                ...state,
                loaded: true,
                loading: false
            }
        }

        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loaded: false, 
                loading: false
            }
        }
    }

    return state;
}