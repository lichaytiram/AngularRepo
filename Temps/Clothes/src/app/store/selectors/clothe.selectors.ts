import { createSelector } from "@ngrx/store";
import * as fromFeature from '../reducers';
import * as fromClothe from '../reducers/clothe.reducer';

export const getClotheState = createSelector(
    fromFeature.getProductsState,
    (clotheState: fromFeature.IProductsState) => clotheState.clothe
);

export const getAllClothes = createSelector(getClotheState, fromClothe.getAllClothes);
export const getClotheLoaded = createSelector(getClotheState, fromClothe.getClotheLoaded);
export const getClothesEntities = createSelector(getClotheState, fromClothe.getClothesEntities);
