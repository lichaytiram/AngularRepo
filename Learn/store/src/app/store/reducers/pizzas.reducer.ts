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
            const pizzas: IPizza[] = action.pizzas;
            return {
                ...adapter.addAll(pizzas, state),
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
    ), on(
        fromPizzas.AddPizzaSuccess, (state: IPizzaState, action) => {
            const pizza: IPizza = action.pizza;
            return adapter.addOne(pizza, state);
        }
    ), on(
        fromPizzas.DeletePizzaSuccess, (state: IPizzaState, action) => {
            const pizzaId: number = action.pizzaId;
            return adapter.removeOne(pizzaId, state);
        }
    )
)
const { selectEntities, selectAll } = adapter.getSelectors();

export const getPizzasEntities = selectEntities;
export const getAllPizzas = selectAll;
export const getPizzasLoading = (state: IPizzaState) => state.loading;
export const getPizzasLoaded = (state: IPizzaState) => state.loaded;