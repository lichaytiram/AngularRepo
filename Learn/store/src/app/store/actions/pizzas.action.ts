import { createAction, props } from '@ngrx/store';
import { IPizza } from 'src/app/shared/models/Pizza.model';

export const LoadPizzas = createAction('[Products] Load Pizzas');
export const LoadPizzasFail = createAction('[Products] Load Pizzas Fail', props<{ payload: IPizza[] }>());
export const LoadPizzasSuccess = createAction('[Products] Load Pizzas Success', props<{ pizzas: IPizza[] }>());
export const DeletePizza = createAction('[Products] Delete Pizza', props<{ pizzaId: number }>());
