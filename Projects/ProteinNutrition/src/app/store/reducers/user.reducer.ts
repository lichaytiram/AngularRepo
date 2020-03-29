import { IUser } from 'src/app/shared/models/iUser.model';
import { createReducer, on } from '@ngrx/store';
import * as fromUser from '../actions/user.action';

export interface IRegisterState {
    user: IUser;
    loaded: boolean;
    updated: boolean;
}

export const initialState: IRegisterState = {
    user: null,
    loaded: false,
    updated: false
}

export const userReducer = createReducer<IRegisterState>(
    initialState
    , on(
        fromUser.LoadUserSuccess, (state: IRegisterState, action) => {
            const { user } = action;
            return {
                ...state,
                loaded: true,
                user
            };
        }
    ), on(
        fromUser.LoginUserFail, (state: IRegisterState) => {
            alert("Your username and password don't match!\nPlease try again.");
            return state;
        }
    ), on(
        fromUser.UserLogout, () => {
            sessionStorage.removeItem("login");
            return initialState;
        }
    ), on(
        fromUser.CreateUserSuccess, (state: IRegisterState) => {
            alert("Your user has been created success!");
            return state;
        }
    ), on(
        fromUser.LoginUserSuccess, (state: IRegisterState, action) => {
            const { user } = action;
            sessionStorage.setItem("login", user.id);
            return {
                ...state,
                loaded: true,
                user
            };
        }
    ), on(
        fromUser.DeleteUserSuccess, () => {
            sessionStorage.removeItem("login");
            return initialState;
        }
    ), on(
        fromUser.UpdateUserSuccess, (state: IRegisterState, action) => {
            const { user } = action;
            return {
                ...state,
                updated: true,
                user
            };
        }
    ), on(
        fromUser.UserUpdated, (state: IRegisterState) => {
            return {
                ...state,
                updated: false
            };
        }
    )

)

export const getUser = (state: IRegisterState) => state.user;
export const getUserLoaded = (state: IRegisterState) => state.loaded;
export const getUserUpdated = (state: IRegisterState) => state.updated;