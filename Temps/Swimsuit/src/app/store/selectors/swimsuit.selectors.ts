import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromSwimsuit from '../reducers/swimsuit.reducer';

export const getSwimsuitState = createSelector(
    fromFeature.getProductsState,
    (swimsuitState: fromFeature.IProductsState) => swimsuitState.swimsuit
);

export const getAllSwimsuits = createSelector(getSwimsuitState, fromSwimsuit.getAllSwimsuits);
export const getSwimsuitLoaded = createSelector(getSwimsuitState, fromSwimsuit.getSwimsuitLoaded);
export const getSwimsuitsEntities = createSelector(getSwimsuitState, fromSwimsuit.getSwimsuitsEntities);
export const getFavoriteSwimsuits = createSelector(getSwimsuitState, fromSwimsuit.getFavoriteSwimsuits);
