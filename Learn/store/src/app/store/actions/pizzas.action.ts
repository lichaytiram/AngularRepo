import { createAction, props } from '@ngrx/store';
import { IPizza } from 'src/app/shared/models/Pizza.model';

export const LoadPizzas = createAction('[Products] Load Pizzas');
export const AddPizza = createAction('[Products] Add Pizza', props<{ name: string }>());
export const DeletePizza = createAction('[Products] Delete Pizza', props<{ pizzaId: number }>());
export const LoadPizzasFail = createAction('[Products] Load Pizzas Fail', props<{ payload: Error }>());
export const AddPizzaFail = createAction('[Products] Add Pizza Fail', props<{ payload: IPizza }>());
export const DeletePizzaFail = createAction('[Products] Delete Pizza Fail', props<{ payload: Error }>());
export const LoadPizzasSuccess = createAction('[Products] Load Pizzas Success', props<{ pizzas: IPizza[] }>());
export const AddPizzaSuccess = createAction('[Products] Add Pizza Success', props<{ pizza: IPizza }>());
export const DeletePizzaSuccess = createAction('[Products] Delete Pizza Success', props<{ pizzaId: number }>());
