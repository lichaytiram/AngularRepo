import { createAction, props } from '@ngrx/store';
import { ITutorial } from 'src/app/shared/models/Itutorial.model';

export const AddTutorial = createAction('[TUTORIAL] Add', props<{ addTutorial: ITutorial }>());
export const RemoveTutorial = createAction('[TUTORIAL] Remove', props<{ numberId: number }>());