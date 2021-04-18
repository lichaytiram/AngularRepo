import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { IClothe } from "src/app/shared/models/iClothe.model";
import * as fromClothe from '../actions/clothe.action';

export const adapter: EntityAdapter<IClothe> = createEntityAdapter<IClothe>();

export interface IClotheState extends EntityState<IClothe> {
    loaded: boolean;
}

export const initialState: IClotheState = adapter.getInitialState({
    loaded: false
})

export const clotheReducer = createReducer<IClotheState>(
    initialState
    , on(
        fromClothe.LoadClothesSuccess, (state: IClotheState, action) => {
            const { clothes } = action;
            return {
                ...adapter.addMany(clothes, state),
                loaded: true
            }
        }
    )
    , on(
        fromClothe.LoadClothesFail, (state: IClotheState) => {
            console.log('fail');
            return state;
        }
    )

);

const { selectEntities, selectAll } = adapter.getSelectors();

export const getAllClothes = selectAll;
export const getClothesEntities = selectEntities;
export const getClotheLoaded = (state: IClotheState) => state.loaded;