import { IUser } from 'src/app/shared/models/iUser.model';
import { createReducer, on } from '@ngrx/store';
import * as fromUser from '../actions/user.action';

export interface IUserState {
    user: IUser;
    loaded: boolean;
    updated: boolean;
    popup: boolean;
}

export const initialState: IUserState = {
    user: null,
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
            alert("Your username and password don't match!\nPlease try again.");
            return state;
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
            alert("Your user has been created success!");
            return state;
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
export const getUserLoaded = (state: IUserState) => state.loaded;
export const getUserUpdated = (state: IUserState) => state.updated;
export const getPopup = (state: IUserState) => state.popup;