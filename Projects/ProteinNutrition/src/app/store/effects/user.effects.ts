import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserService } from 'src/app/shared/services/user.service';
import * as userActions from '../actions/user.action';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService, private router: Router) { }

  public createUser$ = createEffect(() => this.actions$.pipe(ofType(userActions.createUser),
    switchMap(action => {
      return this.userService.createUser(action.register).pipe(
        map(user => {
          this.router.navigate(['product/login'])
          return userActions.createUserSuccess({ register: user })
        }),
        catchError(error => of(userActions.createUserFail(error)))
      )
    })
  ))

}
