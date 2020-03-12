import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as pizzasActions from '../actions/pizzas.action';
import { PizzaService } from '../../shared/services/pizza.service';

@Injectable({
  providedIn: 'root'
})
export class PizzasEffects {

  constructor(private actions$: Actions, private pizzaService: PizzaService) { }

  public loadPizzas$ = createEffect(() => this.actions$.pipe(ofType(pizzasActions.LoadPizzas),
    switchMap(() => {
      return this.pizzaService.getPizzas().pipe(
        map(pizzas => pizzasActions.LoadPizzasSuccess({ pizzas: pizzas })),
        catchError(error => of(pizzasActions.LoadPizzasFail(error)))
      )
    })
  ))

  public addPizza = createEffect(() => this.actions$.pipe(ofType(pizzasActions.AddPizza),
    switchMap(action => {
      return this.pizzaService.addPizza(action.name).pipe(
        map(pizza => pizzasActions.AddPizzaSuccess({ pizza: pizza })),
        catchError(error => of(pizzasActions.AddPizzaFail(error)))
      )
    })
  ))

  public deletePizza = createEffect(() => this.actions$.pipe(ofType(pizzasActions.DeletePizza),
    switchMap(action => {
      return this.pizzaService.deletePizza(action.pizzaId).pipe(
        map(() => pizzasActions.DeletePizzaSuccess({ pizzaId: action.pizzaId })),
        catchError(error => of(pizzasActions.DeletePizzaFail(error)))
      )
    })
  ))

}