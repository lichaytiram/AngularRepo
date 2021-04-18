import { createSelector } from '@ngrx/store';

import { IProtein } from 'src/app/shared/models/iProtein.model';

import * as fromFeature from '../reducers';
import * as fromProtein from '../reducers/protein.reducer';
import { getRouterState } from 'src/app/storeRouter';

export const getProteinState = createSelector(
    fromFeature.getProductsState,
    (proteinState: fromFeature.IProductsState) => proteinState.protein
);

export const getAllProteins = createSelector(getProteinState, fromProtein.getAllProteins);
export const getProteinLoaded = createSelector(getProteinState, fromProtein.getProteinLoaded);
export const getProteinsEntities = createSelector(getProteinState, fromProtein.getProteinsEntities);
export const getProteinSaved = createSelector(getProteinState, fromProtein.getProteinSaved);

export const getSelectedProtein = createSelector(
    getProteinsEntities,
    getRouterState,
    (entities, router): IProtein => router.state && entities[parseInt(router.state.params.proteinId)]
);