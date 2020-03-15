import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserService } from 'src/app/shared/services/user.service';
import * as userActions from '../actions/user.action';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/shared/models/iRegister.model';

@Injectable({
  providedIn: 'root'
})
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService, private router: Router) { }

  public loadUser$ = createEffect(() => this.actions$.pipe(ofType(userActions.loadUser),
    switchMap(action => {
      return this.userService.getUser(action.userId).pipe(
        map((user: IRegister) => {
          user.id = action.userId;
          return userActions.loadUserSuccess({ user: user })
        }),
        catchError(error => of(userActions.loadUserFail(error)))
      )
    })
  ))

  public createUser$ = createEffect(() => this.actions$.pipe(ofType(userActions.createUser),
    switchMap(action => {
      return this.userService.createUser(action.register).pipe(
        map((user: any) => {
          this.router.navigate(['product/login']);
          let register: IRegister = action.register;
          register.id = user.name;
          return userActions.createUserSuccess({ register: action.register });
        }),
        catchError(error => of(userActions.createUserFail(error)))
      )
    })
  ))

  public loginUser$ = createEffect(() => this.actions$.pipe(ofType(userActions.loginUser),
    switchMap(action => {
      return this.userService.login(action.login).pipe(
        map((loginUser) => {
          this.router.navigate(['product/account']);
          return userActions.loginUserSuccess({ register: loginUser });
        }),
        catchError(error => of(userActions.loginUserFail(error)))
      )
    })
  ))

}
