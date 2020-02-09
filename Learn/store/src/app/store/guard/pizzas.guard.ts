import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, filter, take, switchMap, catchError, map } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../index';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PizzasGuard implements CanActivate {

  constructor(private Store: Store<fromStore.IProductesState>, private route: Router) { }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    )
  }

  checkStore(): Observable<boolean> {
    // return this.Store.pipe(select(fromStore.getPizzasLoaded)).pipe(
    //   tap(loaded => {
    //     if (!loaded)
    //       this.Store.dispatch(fromStore.LoadPizzas())
    //   }),
    // filter(loaded => loaded),
    // take(1)
    // )

    return this.Store.pipe(select(fromStore.getPizzasLoaded)).pipe(
      tap(loaded => {
        if (!loaded)
          this.Store.dispatch(fromStore.LoadPizzas())
        // return true
      })
    )
  }

}
