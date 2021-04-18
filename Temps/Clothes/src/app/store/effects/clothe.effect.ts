import { switchMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import * as clotheActions from '../actions/clothe.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ClotheService } from 'src/app/shared/services/clothe.service';

@Injectable({
  providedIn: 'root'
})
export class ClotheEffect {

  constructor(private actions$: Actions, private clotheService: ClotheService) { }

  public loadClothes$ = createEffect(() => this.actions$.pipe(ofType(clotheActions.LoadClothes),
    switchMap(() => this.clotheService.getAllClothes().pipe(
      map(clothes => clotheActions.LoadClothesSuccess({ clothes })),
      catchError(error => of(clotheActions.LoadClothesFail(error)))
    ))
  ));

}
