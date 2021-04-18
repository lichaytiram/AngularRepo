import { createAction, props } from '@ngrx/store';
import { ISwimsuit } from 'src/app/shared/models/ISwimsuit.model';

export const LoadSwimsuit = createAction('[Swimsuit] Load Swimsuits');
export const LoadSwimsuitFail = createAction('[Swimsuit] Load Swimsuits Fail', props<{ error: Error }>());
export const LoadSwimsuitSuccess = createAction('[Swimsuit] Load Swimsuits Success', props<{ swimsuits: ISwimsuit[] }>());
export const addToFavorite = createAction('[Swimsuit] Add To Favorite', props<{ swimsuit: ISwimsuit }>());
export const addToFavoriteFail = createAction('[Swimsuit] Add To Favorite Fail', props<{ error: Error }>());
export const addToFavoriteSuccess = createAction('[Swimsuit] Add To Favorite Success', props<{ swimsuit: ISwimsuit }>());
export const loadFavorite = createAction('[Swimsuit] Load Favorite');
export const loadFavoriteFail = createAction('[Swimsuit] Load Favorite Fail', props<{ error: Error }>());
export const loadFavoriteSuccess = createAction('[Swimsuit] Load Favorite Success', props<{ favorites: ISwimsuit[] }>());