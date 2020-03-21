import { IUser } from 'src/app/shared/models/iUser.model';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as fromUser from '../actions/user.action';

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();

export interface IRegisterState extends EntityState<IUser> {
    loaded: boolean;
}

export const initialState: IRegisterState = adapter.getInitialState({
    loaded: false
})

export const userReducer = createReducer<IRegisterState>(
    initialState
    , on(
        fromUser.loadUserSuccess, (state: IRegisterState, action) => {
            const { user } = action;
            return {
                ...adapter.addOne(user, state),
                loaded: true
            };
        }
    ), on(
        fromUser.loginUserFail, (state: IRegisterState) => {
            alert("Your username and password don't match!\nPlease try again.");
            return state;
        }
    ), on(
        fromUser.createUserSuccess, (state: IRegisterState, action) => {
            const { user } = action;
            return adapter.addOne(user, state);
        }
    ), on(
        fromUser.loginUserSuccess, (state: IRegisterState, action) => {
            const { user } = action;
            sessionStorage.setItem("login", user.id);
            return {
                ...adapter.addOne(user, state),
                loaded: true
            };
        }
    ), on(
        fromUser.deleteUserSuccess, (state: IRegisterState) => {
            sessionStorage.removeItem("login");
            return state;
        }
    ), on(
        fromUser.updateUserSuccess, (state: IRegisterState, action) => {
            const { user } = action;
            const userToChange = { id: user.id, changes: user };
            return adapter.updateOne(userToChange, state);
        }
    )

)

export const getUserLoaded = (state: IRegisterState) => state.loaded;