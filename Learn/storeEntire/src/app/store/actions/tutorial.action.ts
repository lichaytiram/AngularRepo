import { Action } from '@ngrx/store';
import { Tutorial } from 'src/app/shared/models/tutorials.model';


export const ADD_TUTORIAL = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove'

export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL;

    constructor(public payload: Tutorial) { }
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL;

    constructor(public payload: number) { }
}

export type TutorialActions = AddTutorial | RemoveTutorial;