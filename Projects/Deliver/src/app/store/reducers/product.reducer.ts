import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { IProduct } from "src/app/shared/models/IProduct.model";

import * as fromProduct from '../actions/product.action';

export const adapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>();

export interface IProductState extends EntityState<IProduct> {
    loaded: boolean
}

export const initialState: IProductState = adapter.getInitialState({
    loaded: false
});

export const productReducer = createReducer<IProductState>(
    initialState
    , on(
        fromProduct.LoadProductsSuccess, (state: IProductState, action) => {
            const { products } = action;

            return {
                ...adapter.addMany(products, state),
                loaded: true
            }
        }
    ), on(
        fromProduct.LoadProductsFail, (state: IProductState, action) => {
            const { error } = action;
            window.confirm(`No data to display/nerror: ${error.message}`)
            return state;
        }
    )
);

const { selectAll } = adapter.getSelectors();

export const getAllProducts = selectAll;
export const getProductLoaded = (state: IProductState) => state.loaded;