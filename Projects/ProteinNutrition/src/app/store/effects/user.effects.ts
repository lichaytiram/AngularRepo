import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from '../actions/user.action';
import * as proteinActions from '../actions/protein.action';

import { UserService } from 'src/app/shared/services/user.service';

import { IId } from 'src/app/shared/models/iId.model';
import { IUser } from 'src/app/shared/models/iUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService, private router: Router) { }

  public loadUser$ = createEffect(() => this.actions$.pipe(ofType(userActions.LoadUser),
    switchMap(action => this.userService.getUser(action.userId).pipe(
      map((user: IUser) => {
        user.id = action.userId;
        return userActions.LoadUserSuccess({ user: user })
      }),
      catchError(error => of(userActions.LoadUserFail(error)))
    ))
  ));

  public createUser$ = createEffect(() => this.actions$.pipe(ofType(userActions.CreateUser),
    switchMap(action => this.userService.createUser(action.user).pipe(
      map((userId: IId) => {

        const { user } = action;
        user.id = userId.name;

        return userActions.CreateUserSuccess({ user });
      }),
      catchError(error => of(userActions.CreateUserFail(error)))
    ))
  ));

  public loginUser$ = createEffect(() => this.actions$.pipe(ofType(userActions.LoginUser),
    switchMap(action => this.userService.login(action.login).pipe(
      map((user: IUser) => {
        if (user) {
          this.router.navigate(['product/account']);
          return userActions.LoginUserSuccess({ user });
        } else return userActions.UserLoginFailOn();
      }),
      catchError(error => of(userActions.LoginUserFail(error)))
    ))
  ));

  public updateUser$ = createEffect(() => this.actions$.pipe(ofType(userActions.UpdateUser),
    switchMap(action => this.userService.updateUser(action.user).pipe(
      map((user: IUser) => {
        user.id = action.user.id;
        return userActions.UpdateUserSuccess({ user });
      }),
      catchError(error => of(userActions.UpdateUserFail(error)))
    ))
  ));

  public deleteUser$ = createEffect(() => this.actions$.pipe(ofType(userActions.DeleteUser),
    switchMap(action => this.userService.deleteUser(action.userId).pipe(
      map(() => {
        this.router.navigate(["product/home"]);
        return userActions.DeleteUserSuccess();
      }),
      catchError(error => of(proteinActions.DeleteProteinFail(error)))
    ))
  ));

}