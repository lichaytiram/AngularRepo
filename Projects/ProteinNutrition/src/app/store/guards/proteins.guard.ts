import { Injectable } from '@angular/core';
import { IProductsState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';

import * as fromStore from '../index';
import { tap, switchMap, catchError, take } from 'rxjs/operators';

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
