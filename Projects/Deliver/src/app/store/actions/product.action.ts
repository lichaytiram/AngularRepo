import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/shared/models/IProduct.model";

export const LoadProducts = createAction('[Products] Load Products');
export const LoadProductsFail = createAction('[Products] Load Products Fail', props<{ error: Error }>());
export const LoadProductsSuccess = createAction('[Products] Load Products Success', props<{ products: IProduct[] }>());