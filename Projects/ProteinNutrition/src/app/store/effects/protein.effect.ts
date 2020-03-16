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

  public createProtein$ = createEffect(() => this.actions$.pipe(ofType(proteinActions.AddProtein),
    switchMap(action => {
      return this.proteinService.createProtein(action.userId, action.protein).pipe(
        map((userId: IId) => {
          const protein: IProtein = action.protein;
          protein.id = userId.name;

          return proteinActions.AddProteinSuccess({ protein: protein });
        }),
        catchError(error => of(proteinActions.AddProteinFail(error)))
      )
    })
  ))

}
