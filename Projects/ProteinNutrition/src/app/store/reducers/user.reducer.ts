import { createReducer, on } from '@ngrx/store';
import * as fromUser from '../actions/user.action';
import { IUser } from 'src/app/shared/models/iUser.model';

export interface IUserState {
    user: IUser;
    created: boolean;
    loginFail: boolean;
    loaded: boolean;
    updated: boolean;
    popup: boolean;
}

export const initialState: IUserState = {
    user: null,
    created: false,
    loginFail: false,
    loaded: false,
    updated: false,
    popup: false
}

export const userReducer = createReducer<IUserState>(
    initialState
    , on(
        fromUser.LoadUserSuccess, (state: IUserState, action) => {
            const { user } = action;
            return {
                ...state,
                loaded: true,
                user
            };
        }
    ), on(
        fromUser.LoginUserFail, (state: IUserState) => {
            return {
                ...state,
                loginFail: true
            };
        }
    ), on(
        fromUser.UserLogout, () => {
            sessionStorage.removeItem("login");
            return initialState;
        }
    ), on(
        fromUser.UserPopupOn, (state: IUserState) => {
            return {
                ...state,
                popup: true
            };
        }
    ), on(
        fromUser.UserPopupOff, (state: IUserState) => {
            return {
                ...state,
                popup: false
            };
        }
    ), on(
        fromUser.CreateUserSuccess, (state: IUserState) => {
            return {
                ...state,
                created: true
            };
        }
    ), on(
        fromUser.UserCreatedOff, (state: IUserState) => {
            return {
                ...state,
                created: false
            };
        }
    ), on(
        fromUser.UserLoginFailOn, (state: IUserState) => {
            return {
                ...state,
                loginFail: true
            };
        }
    ), on(
        fromUser.UserLoginFailOff, (state: IUserState) => {
            return {
                ...state,
                loginFail: false
            };
        }
    ), on(
        fromUser.LoginUserSuccess, (state: IUserState, action) => {
            const { user } = action;
            sessionStorage.setItem("login", user.id);
            return {
                ...state,
                loaded: true,
                user
            };
        }
    ), on(
        fromUser.UpdateUserSuccess, (state: IUserState, action) => {
            const { user } = action;
            return {
                ...state,
                updated: true,
                user
            };
        }
    ), on(
        fromUser.DeleteUserSuccess, () => {
            sessionStorage.removeItem("login");
            return initialState;
        }
    ), on(
        fromUser.UserUpdated, (state: IUserState) => {
            return {
                ...state,
                updated: false
            };
        }
    )

);

export const getUser = (state: IUserState) => state.user;
export const getCreated = (state: IUserState) => state.created;
export const getLoginFail = (state: IUserState) => state.loginFail;
export const getUserLoaded = (state: IUserState) => state.loaded;
export const getUserUpdated = (state: IUserState) => state.updated;
export const getPopup = (state: IUserState) => state.popup;