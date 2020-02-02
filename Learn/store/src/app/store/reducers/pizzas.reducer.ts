import { IPizzaState } from 'src/app/shared/models/pizzaState.model';
import * as fromPizzas from '../actions/pizzas.action'
import { createReducer, on } from '@ngrx/store';
import { IPizza } from 'src/app/shared/models/Pizza.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

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
    ), on(
        fromPizzas.DeletePizza, (state: IPizzaState, action) => {

            let copyentities = { ...state };
            const id = action.pizzaId;
            // let entities: { [id: number]: IPizza } = {};

            // Object.keys(entities).forEach((entityId => {
            //     if (parseInt(entityId) != id) {
            //         console.log("hi");
            //         entities = { ...entities, [entityId]: copyentities[entityId] };
            //     }
            // }));

            console.log(copyentities);
            console.log(copyentities);
            copyentities.entities[id] = null;
            console.log("after");
            console.log(copyentities);

            return {
                ...state,
                copyentities,
                loaded: false,
                loading: false,
            };
        }

    )

)

export const getPizzasEntities = (state: IPizzaState) => state.entities;
export const getPizzasLoading = (state: IPizzaState) => state.loading;
export const getPizzasLoaded = (state: IPizzaState) => state.loaded;