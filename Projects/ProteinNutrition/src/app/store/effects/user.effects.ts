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
    switchMap(action => this.userService.getUser(action.userId).pipe(
      map((user: IRegister) => {
        user.id = action.userId;
        return userActions.loadUserSuccess({ user: user })
      }),
      catchError(error => of(userActions.loadUserFail(error)))
    ))
  ));

  public createUser$ = createEffect(() => this.actions$.pipe(ofType(userActions.createUser),
    switchMap(action => this.userService.createUser(action.register).pipe(
      map((userId: IId) => {
        this.router.navigate(['product/login']);
        const register: IRegister = action.register;
        register.id = userId.name;

        return userActions.createUserSuccess({ register: action.register });
      }),
      catchError(error => of(userActions.createUserFail(error)))
    ))
  ));

  public loginUser$ = createEffect(() => this.actions$.pipe(ofType(userActions.loginUser),
    switchMap(action => this.userService.login(action.login).pipe(
      switchMap((loginUser: IRegister) => {
        const userId = loginUser.id;
        this.router.navigate(['product/account']);
        return [userActions.loginUserSuccess({ register: loginUser }), proteinActions.LoadProteins({ userId })];
      }),
      catchError(error => of(userActions.loginUserFail(error)))
    ))
  ));

  public updateUser$ = createEffect(() => this.actions$.pipe(ofType(userActions.updateUser),
    switchMap(action => this.userService.updateUser(action.user).pipe(
      map((user: IRegister) => {
        user.id = action.user.id;
        return userActions.updateUserSuccess({ user });
      }),
      catchError(error => of(userActions.updateUserFail(error)))
    ))
  ));

}
