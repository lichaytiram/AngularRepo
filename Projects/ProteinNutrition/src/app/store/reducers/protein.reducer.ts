import { IProtein } from 'src/app/shared/models/iProtein.model';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as fromProtein from '../actions/protein.action';

export const adapter: EntityAdapter<IProtein> = createEntityAdapter<IProtein>();

export interface IProteinState extends EntityState<IProtein> {
    loaded: boolean;
}

export const initialState: IProteinState = adapter.getInitialState({
    loaded: false
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
        fromProtein.AddProteinSuccess, (state: IProteinState, action) => {
            const { protein } = action;
            return adapter.addOne(protein, state);
        }

    ), on(
        fromProtein.DeleteProteinSuccess, (state: IProteinState, action) => {
            const { proteinId } = action;
            return adapter.removeOne(proteinId, state);
        }
    )

)

const { selectEntities, selectAll } = adapter.getSelectors();

export const getAllProteins = selectAll;
export const getProteinsEntities = selectEntities;
export const getProteinLoaded = (state: IProteinState) => state.loaded;