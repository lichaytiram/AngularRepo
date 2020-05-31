import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, switchMap, catchError, take } from 'rxjs/operators';
import { CanActivate } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { IProductsState } from '../reducers';
import * as fromStore from '../index';

@Injectable({
  providedIn: 'root'
})
export class ProteinsGuard implements CanActivate {

  constructor(private store: Store<IProductsState>) { }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    )
  }

  private checkStore(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getProteinLoaded)).pipe(
      tap(loaded => {
        const userId: string = sessionStorage.getItem('login');

        if (!loaded && userId)
          this.store.dispatch(fromStore.LoadProteins({ userId }))
      }),
      take(1)
    )
  }

}
