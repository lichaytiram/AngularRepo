import { createAction, props } from '@ngrx/store';
import { IUser } from '../../shared/models/iUser.model';
import { ILogin } from 'src/app/shared/models/iLogin.model';

export const CreateUser = createAction('[Products] Create User', props<{ user: IUser }>());
export const CreateUserFail = createAction('[Products] Create User Fail', props<{ error: Error }>());
export const CreateUserSuccess = createAction('[Products] Create User Success', props<{ user: IUser }>());
export const LoadUser = createAction('[Products] Load User', props<{ userId: string }>());
export const LoadUserFail = createAction('[Products] Load User Fail', props<{ error: Error }>());
export const LoadUserSuccess = createAction('[Products] Load User Success', props<{ user: IUser }>());
export const LoginUser = createAction('[Products] Login User', props<{ login: ILogin }>());
export const LoginUserFail = createAction('[Products] Login User Fail', props<{ error: Error }>());
export const LoginUserSuccess = createAction('[Products] Login User Success', props<{ user: IUser }>());
export const UpdateUser = createAction('[Products] Update User', props<{ user: IUser }>());
export const UpdateUserFail = createAction('[Products] Update User Fail', props<{ error: Error }>());
export const UpdateUserSuccess = createAction('[Products] Update User Success', props<{ user: IUser }>());
export const DeleteUser = createAction('[Products] Delete User', props<{ userId: string }>());
export const DeleteUserFail = createAction('[Products] Delete User Fail', props<{ error: Error }>());
export const DeleteUserSuccess = createAction('[Products] Delete User Success');
export const UserUpdated = createAction('[Products] User Updated');
export const UserLogout = createAction('[Products] User Logout');
export const UserPopupOn = createAction('[Products] User Popup On');
export const UserPopupOff = createAction('[Products] User Popup Off');
export const UserCreatedOff = createAction('[Products] User Created Off');
export const UserLoginFailOff = createAction('[Products] User Login Fail Off');