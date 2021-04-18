import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { IClothe } from "src/app/shared/models/iClothe.model";
import * as fromCart from '../actions/cart.action';

export const adapter: EntityAdapter<IClothe> = createEntityAdapter<IClothe>();

export interface ICartState extends EntityState<IClothe> {
    loaded: boolean;
    saved: boolean;
    failAdd: boolean;

}

export const initialState: ICartState = adapter.getInitialState({
    loaded: false,
    saved: false,
    failAdd: false
})

export const cartReducer = createReducer<ICartState>(
    initialState
    , on(
        fromCart.LoadCartsSuccess, (state: ICartState, action) => {
            const { carts } = action;
            return {
                ...adapter.addMany(carts, state),
                loaded: true
            }
        }
    )
    , on(
        fromCart.LoadCartsFail, (state: ICartState) => {
            console.log('LoadCartsFail');
            return state;
        }
    )
    , on(
        fromCart.AddCartSuccess, (state: ICartState, action) => {
            const { cart } = action;
            return adapter.addOne(cart, state);
        }
    )
    , on(
        fromCart.AddCartFail, (state: ICartState) => {
            console.log('AddCartFail');
            return {
                ...state,
                failAdd: true
            };
        }
    )
    , on(
        fromCart.FailAddOff, (state: ICartState) => {
            return {
                ...state,
                failAdd: false
            };
        }
    )

);

const { selectEntities, selectAll } = adapter.getSelectors();

export const getAllCarts = selectAll;
export const getCartsEntities = selectEntities;
export const getCartLoaded = (state: ICartState) => state.loaded;
export const getCartSaved = (state: ICartState) => state.saved;
export const getFailAddCart = (state: ICartState) => state.failAdd;