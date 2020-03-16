import { createAction, props } from '@ngrx/store';
import { IProtein } from 'src/app/shared/models/iProtein.model';

export const LoadProteins = createAction('[Products] Load Proteins');
export const LoadProteinsFail = createAction('[Products] Load Proteins Fail', props<{ error: Error }>());
export const LoadProteinsSuccess = createAction('[Products] Load Proteins Success', props<{ proteins: IProtein[] }>());
export const AddProtein = createAction('[Products] Add Protein', props<{ userId: string, protein: IProtein }>());
export const AddProteinFail = createAction('[Products] Add Protein Fail', props<{ error: Error }>());
export const AddProteinSuccess = createAction('[Products] Add Protein Success', props<{ protein: IProtein }>());
export const DeleteProtein = createAction('[Products] Delete Protein', props<{ proteinId: number }>());
export const DeleteProteinFail = createAction('[Products] Delete Protein Fail', props<{ error: Error }>());
export const DeleteProteinSuccess = createAction('[Products] Delete Protein Success', props<{ proteinId: number }>());