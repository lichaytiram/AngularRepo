import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as swimsuitActions from '../actions/swimsuit.action';

import { SwimsuitService } from 'src/app/shared/services/swimsuit.service';

@Injectable({
  providedIn: 'root'
})
export class SwimsuitEffect {

  constructor(private actions$: Actions, private swimsuitService: SwimsuitService) { }

  public loadSwimsuits$ = createEffect(() => this.actions$.pipe(ofType(swimsuitActions.LoadSwimsuit),
    switchMap(() => this.swimsuitService.getAllSwimsuits().pipe(
      map(swimsuits => swimsuitActions.LoadSwimsuitSuccess({ swimsuits })),
      catchError(error => of(swimsuitActions.LoadSwimsuitFail(error)))
    ))
  ));

  public loadFavorite$ = createEffect(() => this.actions$.pipe(ofType(swimsuitActions.loadFavorite),
    switchMap(() => this.swimsuitService.loadFavorite().pipe(
      map(favorites => swimsuitActions.loadFavoriteSuccess({ favorites })),
      catchError(error => of(swimsuitActions.loadFavoriteFail(error)))
    ))
  ));

  public addToFavorite$ = createEffect(() => this.actions$.pipe(ofType(swimsuitActions.addToFavorite),
    switchMap(action => this.swimsuitService.createFavorite(action.swimsuit).pipe(
      map(swimsuit => swimsuitActions.addToFavoriteSuccess({ swimsuit })),
      catchError(error => of(swimsuitActions.addToFavoriteFail(error)))
    ))
  ));


}