import { createAction, props } from '@ngrx/store';
import { IProtein } from 'src/app/shared/models/iProtein.model';

export const LoadProteins = createAction('[Products] Load Proteins', props<{ userId: string }>());
export const LoadProteinsFail = createAction('[Products] Load Proteins Fail', props<{ error: Error }>());
export const LoadProteinsSuccess = createAction('[Products] Load Proteins Success', props<{ proteins: IProtein[] }>());
export const AddProtein = createAction('[Products] Add Protein', props<{ userId: string, protein: IProtein }>());
export const AddProteinFail = createAction('[Products] Add Protein Fail', props<{ error: Error }>());
export const AddProteinSuccess = createAction('[Products] Add Protein Success', props<{ protein: IProtein }>());
export const UpdateProtein = createAction('[Products] Update Protein', props<{ userId: string, protein: IProtein }>())
export const UpdateProteinFail = createAction('[Products] Update Protein Fail', props<{ error: Error }>())
export const UpdateProteinSuccess = createAction('[Products] Update Protein Success', props<{ protein: IProtein }>())
export const DeleteProtein = createAction('[Products] Delete Protein', props<{ userId: string, proteinId: string }>());
export const DeleteProteinFail = createAction('[Products] Delete Protein Fail', props<{ error: Error }>());
export const DeleteProteinSuccess = createAction('[Products] Delete Protein Success', props<{ proteinId: string }>());
export const DeleteAllProteins = createAction('[Products] Delete All Proteins', props<{ userId: string }>());
export const DeleteAllProteinsFail = createAction('[Products] Delete All Proteins Fail', props<{ error: Error }>());
export const DeleteAllProteinsSuccess = createAction('[Products] Delete All Proteins Success');
export const ProteinLogout = createAction('[Products] Protein Logout');