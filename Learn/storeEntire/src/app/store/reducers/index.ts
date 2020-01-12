import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/models/appState.models';
import { tutorialReducer } from './tutorial.reducer';

import * as fromRuducer from '../reducers/tutorial.reducer';
import { ITutorial } from 'src/app/shared/models/Itutorial.model';

export const reducers: ActionReducerMap<IAppState> = {
    tutorial: tutorialReducer
}

export const getFeatureSelector = createFeatureSelector<IAppState>("tutorial");

export const getTutorialState = createSelector(getFeatureSelector,
    (state: IAppState) => state.tutorial
);

export const getTutorialState2 = createSelector(getTutorialState,
    (tutorial: ITutorial) => tutorial.name
);

export const getMyData = createSelector(getTutorialState2, () => {

    fromRuducer.getAllTutorials
}
)

