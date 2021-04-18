import { createSelector } from "@ngrx/store";
import * as fromFeature from '../reducers';
import * as fromCart from '../reducers/cart.reducer';

export const getCartState = createSelector(
    fromFeature.getProductsState,
    (cartState: fromFeature.IProductsState) => cartState.cart
);

export const getAllCarts = createSelector(getCartState, fromCart.getAllCarts);
export const getCartLoaded = createSelector(getCartState, fromCart.getCartLoaded);
export const getCartSaved = createSelector(getCartState, fromCart.getCartSaved);
export const getCartsEntities = createSelector(getCartState, fromCart.getCartsEntities);
export const getFailAddCart = createSelector(getCartState, fromCart.getFailAddCart);
