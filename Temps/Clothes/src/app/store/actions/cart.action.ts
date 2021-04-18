import { createAction, props } from "@ngrx/store";
import { IClothe } from "src/app/shared/models/iClothe.model";

export const LoadCarts = createAction('[Products] Load carts');
export const LoadCartsFail = createAction('[Products] Load Cart Fail', props<{ error: Error }>());
export const LoadCartsSuccess = createAction('[Products] Load Carts Success', props<{ carts: IClothe[] }>());
export const AddCart = createAction('[Products] Add Cart', props<{ cart: IClothe }>());
export const AddCartFail = createAction('[Products] Add Cart Fail', props<{ error: Error }>());
export const AddCartSuccess = createAction('[Products] Add Cart Success', props<{ cart: IClothe }>());
export const FailAddOff = createAction('[Products] Fail Add Off');