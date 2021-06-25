import { createEntityAdapter, EntityAdapter, EntityState, Update } from "@ngrx/entity";
import { UpdateStr } from "@ngrx/entity/src/models";
import { createReducer, on } from "@ngrx/store";
import { IProduct } from "src/app/shared/models/IProduct.model";

import * as fromProduct from '../actions/product.action';

export const adapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>();

export interface IProductState extends EntityState<IProduct> {
    loaded: boolean,
    saved: boolean
}

export const initialState: IProductState = adapter.getInitialState({
    loaded: false,
    saved: false
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
            window.confirm(`No data to display/nerror: ${error.message}`);
            return state;
        }
    ), on(
        fromProduct.AddProduct, (state: IProductState, action) => {
            const { product } = action;
            return {
                ...adapter.addOne(product, state),
                saved: true
            }
        }
    ), on(
        fromProduct.DeleteProduct, (state: IProductState, action) => {
            const { id } = action;
            return adapter.removeOne(id, state);
        }
    ), on(
        fromProduct.UpdateProduct, (state: IProductState, action) => {
            const { product } = action;

            const { id, ...newProduct } = product;
            const changes: Partial<IProduct> = newProduct;
            const update: UpdateStr<IProduct> = { id, changes };

            return adapter.updateOne(update, state);
        }
    ), on(
        fromProduct.SavedProductOff, (state: IProductState) => {

            return {
                ...state,
                saved: false
            };
        }
    )
);

const { selectAll } = adapter.getSelectors();

export const getAllProducts = selectAll;
export const getProductLoaded = (state: IProductState) => state.loaded;
export const getProductSaved = (state: IProductState) => state.saved;