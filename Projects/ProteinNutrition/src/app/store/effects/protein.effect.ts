import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ProteinService } from 'src/app/shared/services/protein.service';
import * as proteinActions from '../actions/protein.action';
import { IId } from 'src/app/shared/models/iId.model';
import { IProtein } from 'src/app/shared/models/iProtein.model';

@Injectable({
  providedIn: 'root'
})
export class ProteinEffect {

  constructor(private actions$: Actions, private proteinService: ProteinService) { }

  public loadProteins$ = createEffect(() => this.actions$.pipe(ofType(proteinActions.LoadProteins),
    switchMap(action => this.proteinService.getProteins(action.userId).pipe(
      map(proteins => proteinActions.LoadProteinsSuccess({ proteins })),
      catchError(error => of(proteinActions.LoadProteinsFail(error)))
    ))
  ));

  public createProtein$ = createEffect(() => this.actions$.pipe(ofType(proteinActions.AddProtein),
    switchMap(action => this.proteinService.createProtein(action.userId, action.protein).pipe(
      map((userId: IId) => {
        const protein: IProtein = action.protein;
        protein.id = userId.name;

        return proteinActions.AddProteinSuccess({ protein });
      }),
      catchError(error => of(proteinActions.AddProteinFail(error)))
    ))
  ));

  public deleteProtein$ = createEffect(() => this.actions$.pipe(ofType(proteinActions.DeleteProtein),
    switchMap(action => this.proteinService.deleteProtein(action.userId, action.proteinId).pipe(
      map(() => proteinActions.DeleteProteinSuccess({ proteinId: action.proteinId })),
      catchError(error => of(proteinActions.DeleteProteinFail(error)))
    ))
  ));

}
