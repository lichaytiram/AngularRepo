import { IRegister } from 'src/app/shared/models/iRegister.model';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as fromUser from '../actions/user.action';

export const adapter: EntityAdapter<IRegister> = createEntityAdapter<IRegister>();

export interface IRegisterState extends EntityState<IRegister> {
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
    )
    , on(
        fromUser.createUserSuccess, (state: IRegisterState, action) => {
            const { register } = action;
            return adapter.addOne(register, state);
        }
    )
    , on(
        fromUser.loginUserSuccess, (state: IRegisterState, action) => {
            const { register } = action;
            sessionStorage.setItem("login", register.id);
            return {
                ...adapter.addOne(register, state),
                loaded: true
            };
        }
    )
    , on(
        fromUser.deleteUserSuccess, (state: IRegisterState) => {
            sessionStorage.removeItem("login");
            return state;
        }
    )
    , on(
        fromUser.updateUserSuccess, (state: IRegisterState, action) => {
            const { user } = action;
            const userToChange = { id: user.id, changes: user };
            return adapter.updateOne(userToChange, state);
        }
    )

)

export const getUserLoaded = (state: IRegisterState) => state.loaded;