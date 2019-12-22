import { ActionReducerMap } from '@ngrx/store';
import { appState } from 'src/app/shared/models/appState.models';
import { reducer } from './tutorial.reducer';

export const reducers: ActionReducerMap<appState> = {
    tutorial: reducer,
}