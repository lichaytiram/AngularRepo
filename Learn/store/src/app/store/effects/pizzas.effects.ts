import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as pizzasActions from '../actions/pizzas.action';
import { PizzaService } from '../../shared/services/pizza.service';

@Injectable({
  providedIn: 'root'
})
export class PizzasEffects {

  constructor(private actions$: Actions, private service: PizzaService) { }

  public loadPizzas$ = createEffect(() => this.actions$.pipe(ofType(pizzasActions.LoadPizzas),
    switchMap(() => {
      return this.service.getPizzas().pipe(
        map(pizzas => pizzasActions.LoadPizzasSuccess({ pizzas: pizzas })),
        catchError(error => of(pizzasActions.LoadPizzasFail(error)))
      )
    })
  ))

}