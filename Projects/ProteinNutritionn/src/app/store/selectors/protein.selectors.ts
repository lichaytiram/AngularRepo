import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromProtein from '../reducers/protein.reducer';

export const getProteinState = createSelector(
    fromFeature.getProductsState,
    (proteinState: fromFeature.IProductsState) => proteinState.protein
)