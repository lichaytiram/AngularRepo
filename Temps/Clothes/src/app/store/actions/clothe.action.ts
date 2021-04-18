import { createAction, props } from "@ngrx/store";
import { IClothe } from "src/app/shared/models/iClothe.model";

export const LoadClothes = createAction('[Products] Load Clothes');
export const LoadClothesFail = createAction('[Products] Load Clothes Fail', props<{ error: Error }>());
export const LoadClothesSuccess = createAction('[Products] Load Clothes Success', props<{ clothes: IClothe[] }>());