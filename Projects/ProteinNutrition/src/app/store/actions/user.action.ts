import { createAction, props } from '@ngrx/store';
import { IUser } from '../../shared/models/iUser.model';
import { ILogin } from 'src/app/shared/models/iLogin.model';

export const createUser = createAction('[products] Create User', props<{ user: IUser }>());
export const createUserFail = createAction('[products] Create User Fail', props<{ error: Error }>());
export const createUserSuccess = createAction('[products] Create User Success', props<{ user: IUser }>());
export const loadUser = createAction('[products] Load User', props<{ userId: string }>());
export const loadUserFail = createAction('[products] Load User Fail', props<{ error: Error }>());
export const loadUserSuccess = createAction('[products] Load User Success', props<{ user: IUser }>());
export const loginUser = createAction('[products] Login User', props<{ login: ILogin }>());
export const loginUserFail = createAction('[products] Login User Fail', props<{ error: Error }>());
export const loginUserSuccess = createAction('[products] Login User Success', props<{ user: IUser }>());
export const deleteUser = createAction('[products] Delete User', props<{ userId: string }>());
export const deleteUserFail = createAction('[products] Delete User Fail', props<{ error: Error }>());
export const deleteUserSuccess = createAction('[products] Delete User Success', props<{ userId: string }>());
export const updateUser = createAction('[products] Update User', props<{ user: IUser }>());
export const updateUserFail = createAction('[products] Update User Fail', props<{ error: Error }>());
export const updateUserSuccess = createAction('[products] Update User Success', props<{ user: IUser }>());