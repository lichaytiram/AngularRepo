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
        fromUser.createUserSuccess, (state: IRegisterState, action) => {
            const { register } = action
            return adapter.addOne(register, state);
        }
    )

)