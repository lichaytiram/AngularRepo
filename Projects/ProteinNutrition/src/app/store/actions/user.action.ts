import { createAction, props } from '@ngrx/store';
import { IRegister } from '../../shared/models/iRegister.model';

export const createUser = createAction('[products] Create User', props<{ register: IRegister }>());
export const createUserFail = createAction('[products] Create User Fail', props<{ register: Error }>());
export const createUserSuccess = createAction('[products] Create User Success', props<{ register: IRegister }>());