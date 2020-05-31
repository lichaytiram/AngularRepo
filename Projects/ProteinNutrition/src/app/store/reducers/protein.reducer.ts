import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as fromProtein from '../actions/protein.action';
import { UpdateStr } from '@ngrx/entity/src/models';

import { IProtein } from 'src/app/shared/models/iProtein.model';

export const adapter: EntityAdapter<IProtein> = createEntityAdapter<IProtein>();

export interface IProteinState extends EntityState<IProtein> {
    loaded: boolean;
    saved: boolean;
}

export const initialState: IProteinState = adapter.getInitialState({
    loaded: false,
    saved: false
})

export const proteinReducer = createReducer<IProteinState>(
    initialState
    , on(
        fromProtein.LoadProteinsSuccess, (state: IProteinState, action) => {
            const { proteins } = action;
            return {
                ...adapter.addAll(proteins, state),
                loaded: true
            }
        }
    ), on(
        fromProtein.ProteinLogout, () => {
            return initialState;
        }
    ), on(
        fromProtein.AddProteinSuccess, (state: IProteinState, action) => {
            const { protein } = action;
            const newState = { ...state, saved: true }
            return adapter.addOne(protein, newState);
        }
    ), on(
        fromProtein.UpdateProteinSuccess, (state: IProteinState, action) => {
            const { protein } = action;
            const { id, ...newProtein } = protein;
            const changes: Partial<IProtein> = { id, ...state.entities[id] = newProtein }
            const update: UpdateStr<IProtein> = { id, changes };
            return adapter.updateOne(update, state);
        }
    ), on(
        fromProtein.DeleteProteinSuccess, (state: IProteinState, action) => {
            const { proteinId } = action;
            return adapter.removeOne(proteinId, state);
        }
    ), on(
        fromProtein.DeleteAllProteinsSuccess, () => {
            return initialState;
        }
    ), on(
        fromProtein.ProteinSavedOff, state => {
            return {
                ...state,
                saved: false
            };
        }
    )

);

const { selectEntities, selectAll } = adapter.getSelectors();

export const getAllProteins = selectAll;
export const getProteinsEntities = selectEntities;
export const getProteinLoaded = (state: IProteinState) => state.loaded;
export const getProteinSaved = (state: IProteinState) => state.saved;