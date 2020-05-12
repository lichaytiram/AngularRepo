import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromUser from '../reducers/user.reducer'

export const getUserState = createSelector(
    fromFeature.getProductsState,
    (userState: fromFeature.IProductsState) => userState.user
)

export const getUser = createSelector(getUserState, fromUser.getUser);
export const getUserCreated = createSelector(getUserState, fromUser.getCreated);
export const getUserLoaded = createSelector(getUserState, fromUser.getUserLoaded);
export const getUserUpdated = createSelector(getUserState, fromUser.getUserUpdated);
export const getPopup = createSelector(getUserState, fromUser.getPopup);