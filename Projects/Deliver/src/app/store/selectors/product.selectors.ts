import { createSelector } from "@ngrx/store";

import * as fromFeature from '../reducers';
import * as fromProduct from '../reducers/product.reducer';

export const getProductsState = createSelector(
    fromFeature.getProductsState,
    (productsState: fromFeature.IProductsState) => productsState.product
);

export const getAllProducts = createSelector(getProductsState, fromProduct.getAllProducts);
export const getProductLoaded = createSelector(getProductsState, fromProduct.getProductLoaded);
