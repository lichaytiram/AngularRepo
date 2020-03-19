import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, concatMap } from 'rxjs/operators';
import * as userActions from '../actions/user.action';
import * as proteinActions from '../actions/protein.action';

import { UserService } from 'src/app/shared/services/user.service';
import { ProteinService } from 'src/app/shared/services/protein.service';

import { IId } from 'src/app/shared/models/iId.model';
import { IRegister } from 'src/app/shared/models/iRegister.model';

@Injectable({
  providedIn: 'root'
})
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService, private proteinService: ProteinService, private router: Router) { }

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
        map((userId: IId) => {
          this.router.navigate(['product/login']);
          const register: IRegister = action.register;
          register.id = userId.name;

          return userActions.createUserSuccess({ register: action.register });
        }),
        catchError(error => of(userActions.createUserFail(error)))
      )
    })
  ))

  public loginUser$ = createEffect(() => this.actions$.pipe(ofType(userActions.loginUser),
    concatMap(action => {
      let userId: string;
      return this.userService.login(action.login).pipe(
        map((loginUser) => {
          userId = loginUser.id;
          this.router.navigate(['product/account']);
          proteinActions.LoadProteins({ userId: userId });
          return userActions.loginUserSuccess({ register: loginUser });
        }),
        catchError(error => of(userActions.loginUserFail(error))),
        // map(() => proteinActions.LoadProteins({ userId: userId })),
        // catchError(error => of(proteinActions.LoadProteinsFail(error)))
      )
    })
  ))

}
