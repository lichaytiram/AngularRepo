import { createSelector } from "@ngrx/store";
import { IProduct } from "src/app/shared/models/IProduct.model";
import { Product } from "src/app/shared/models/Product.model";

import * as fromFeature from '../reducers';
import * as fromProduct from '../reducers/product.reducer';

export const getProductsState = createSelector(
    fromFeature.getProductsState,
    (productsState: fromFeature.IProductsState) => productsState.product
);

export const getAllProducts = createSelector(getProductsState, fromProduct.getAllProducts);
export const getProductLoaded = createSelector(getProductsState, fromProduct.getProductLoaded);
export const getProductSaved = createSelector(getProductsState, fromProduct.getProductSaved);

export const getProductsFilter = (filterData: string) => createSelector(
    getAllProducts,
    (products) => {

        // upper case and lower case is allow 
        filterData = filterData?.toLowerCase();

        if (filterData.trim() === '')
            return products;
        else
            return products.filter(value => value.name.toLowerCase().includes(filterData) || value?.description.toLowerCase().includes(filterData));

    });
