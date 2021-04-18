import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as fromSwimsuit from '../actions/swimsuit.action';

import { ISwimsuit } from 'src/app/shared/models/ISwimsuit.model';

export const adapter: EntityAdapter<ISwimsuit> = createEntityAdapter<ISwimsuit>();

export interface ISwimsuitState extends EntityState<ISwimsuit> {
    loaded: boolean;
    favorite: ISwimsuit[];
}

export const initialState: ISwimsuitState = adapter.getInitialState({
    loaded: false,
    favorite: []
});

export const swimsuitReducer = createReducer<ISwimsuitState>(
    initialState
    , on(
        fromSwimsuit.LoadSwimsuitFail, (state) => {
            console.log('Load swimsuit is fail')
            return state
        }
    ), on(
        fromSwimsuit.LoadSwimsuitSuccess, (state: ISwimsuitState, action) => {
            const { swimsuits } = action;

            return {
                ...adapter.addMany(swimsuits, state),
                loaded: true
            }
        }
    ), on(
        fromSwimsuit.addToFavoriteFail, (state: ISwimsuitState) => {
            console.log('Add To Favorite Fail')

            return state;
        }

    ), on(
        fromSwimsuit.loadFavoriteSuccess, (state: ISwimsuitState, action) => {
            const { favorites } = action;
            const newState = { ...state };
            newState.favorite = favorites;

            return newState;
        }
    ), on(
        fromSwimsuit.addToFavoriteSuccess, (state: ISwimsuitState, action) => {
            const { swimsuit } = action;
            const newState = { ...state };
            newState.favorite.push(swimsuit);

            return newState;
        }
    )

);

const { selectEntities, selectAll } = adapter.getSelectors();

export const getAllSwimsuits = selectAll;
export const getSwimsuitsEntities = selectEntities;
export const getSwimsuitLoaded = (state: ISwimsuitState) => state.loaded;
export const getFavoriteSwimsuits = (state: ISwimsuitState) => state.favorite;