import { IPizzaState } from 'src/app/shared/models/pizzaState.model';
import * as fromPizzas from '../actions/pizzas.action'
import { createReducer, on } from '@ngrx/store';
import { IPizza } from 'src/app/shared/models/Pizza.model';

export const initialState: IPizzaState = {
    entities: {
        3:
        {
            "id": 3,
            "name": "non"
        }
    }
    ,
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
            const pizzas = action.pizza;

            const entities: { [id: number]: IPizza } = pizzas.reduce(
                (entities: { [id: number]: IPizza }, pizza: IPizza) => {
                    return {
                        ...entities,
                        [pizza.id]: pizza
                    }
                }, state.entities)

            return {
                ...state,
                loaded: true,
                loading: false,
                entities
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

export const getPizzasEntities = (state: IPizzaState) => state.entities;
export const getPizzasLoading = (state: IPizzaState) => state.loading;
export const getPizzasLoaded = (state: IPizzaState) => state.loaded;