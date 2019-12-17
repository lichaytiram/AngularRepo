import { Tutorial } from "src/app/shared/models/tutorials.model";
import * as fromTutorial from '../actions/tutorial.action';
import { from } from 'rxjs';

const initialState: Tutorial = {
    name: 'Initial tutorial',
    url: 'http://google.com'
}

export function reducer(state: Tutorial[] = [initialState], action: fromTutorial.TutorialActions): Tutorial[] {

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