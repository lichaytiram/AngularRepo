import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from 'src/app/shared/models/appState.models';
import { tutorialReducer } from './tutorial.reducer';

export const reducers: ActionReducerMap<IAppState> = {
    tutorial: tutorialReducer
}