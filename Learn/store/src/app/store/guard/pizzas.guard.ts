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
    //  this.Store.pipe(select(fromStore.getPizzasLoaded)).pipe(
    //   (loaded) => {
    //     if (loaded == of(false) || loaded == null || loaded == undefined) {
    //       this.Store.dispatch(fromStore.LoadPizzas);
    //       console.log("inside");

    //       return of(true)
    //     }

    //     return of(false)
    //   }
    //   )
    //   return of(true)

    this.Store.pipe(select(fromStore.getPizzasLoaded)).pipe(
      loaded => {
        loaded.subscribe(
          () => this.Store.dispatch(fromStore.LoadPizzas())
            
          
        )
        return of(true)
      }
      )
      return of(true)
    


    // this.route.navigate([`/product/add`]);

    return this.checkStore().pipe(
      map(() => true),
      catchError(() => of(false))
    )
    }

  checkStore(): Observable<boolean> {

    // return this.Store.pipe(select(fromStore.getPizzasLoaded)).pipe(
    //   tap(loaded => {
    //     if (loaded == false) {
    //       console.log(loaded);
    //       this.Store.dispatch(fromStore.LoadPizzas);
    //       return false;

    //     }else
    //     return true
    //   }

    // ))

    return this.Store.pipe(select(fromStore.getPizzasLoaded)).pipe(
      tap(loaded => {
        if (!loaded)
          this.Store.dispatch(fromStore.LoadPizzas);
      }),
      filter(loaded => loaded),
      take(1)
    )
  }

}
