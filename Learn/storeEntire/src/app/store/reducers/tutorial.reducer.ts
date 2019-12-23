import { ITutorial } from "src/app/shared/models/Itutorial.model";
import * as fromTutorial from '../actions/tutorial.action';

export const initialState: ITutorial = {
    name: 'google',
    url: 'http://google.com'
}

export function reducer(state: ITutorial[] = [initialState], action: fromTutorial.TutorialActions): ITutorial[] {

    switch (action.type) {

        case fromTutorial.ADD_TUTORIAL:
            return [...state, action.payload];

        case fromTutorial.REMOVE_TUTORIAL:
            state.splice(action.payload, 1);
            return state;

        default: {
            return state;
        }

    }

}