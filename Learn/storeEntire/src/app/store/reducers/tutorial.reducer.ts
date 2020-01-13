import { ITutorial } from "src/app/shared/models/Itutorial.model";
import * as fromTutorial from '../actions/tutorial.action';
import { createReducer, on } from '@ngrx/store';

export const initialState: ITutorial[] = [
    {
        name: 'google',
        url: 'http://google.com'
    }]

export const tutorialReducer = createReducer<ITutorial[]>(
    initialState
    , on(
        fromTutorial.AddTutorial, (state, action) => [...state, action.addTutorial]
    ), on(
        fromTutorial.RemoveTutorial, (state, action) => {
            const newState: ITutorial[] = state.concat();
            newState.splice(action.numberId, 1);
            return newState
        }
    )
)

export const getAllTutorials = (state: ITutorial[]) => state;