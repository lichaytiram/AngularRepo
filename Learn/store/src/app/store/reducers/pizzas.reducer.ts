import * as fromPizzas from '../actions/pizzas.action'
import { createReducer, on } from '@ngrx/store';
import { IPizza } from 'src/app/shared/models/Pizza.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const adapter: EntityAdapter<IPizza> = createEntityAdapter<IPizza>();

export interface IPizzaState extends EntityState<IPizza> {
    loaded: boolean,
    loading: boolean
}

export const initialState: IPizzaState = adapter.getInitialState({
    entities: {
        3:
        {
            "id": 3,
            "name": "non"
        }
    },
    loaded: false,
    loading: false
});

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
            let entities = { ...adapter.addAll(action.pizza, state).entities, ...state.entities }
            return {
                ...state,
                entities,
                loaded: true,
                loading: false
            };
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
            return adapter.removeOne(action.pizzaId, state);
        }
    )
)
const { selectEntities } = adapter.getSelectors();

export const getPizzasEntities = selectEntities;
export const getPizzasLoading = (state: IPizzaState) => state.loading;
export const getPizzasLoaded = (state: IPizzaState) => state.loaded;