import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ILogin } from '../shared/models/iLogin.model';
import { Login } from '../shared/models/login.model';

import { Store, select } from '@ngrx/store';
import { IProductsState } from '../store';
import { LoginUser, UserLoginFailOff } from '../store/actions/user.action';
import { Observable } from 'rxjs';
import { getLoginFail } from '../store/selectors/user.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public login: ILogin;
  public loginFail$: Observable<boolean>;

  constructor(private store: Store<IProductsState>, private route: Router) { }

  ngOnInit() {

    this.login = new Login(undefined, undefined);
    this.loginFail$ = this.store.pipe(select(getLoginFail));

  }

  ngOnDestroy() {

    this.store.dispatch(UserLoginFailOff());

  }

  public tryAgain() {
    this.store.dispatch(UserLoginFailOff());
  }

  public userLogin(): void {
    const login: ILogin = this.login;
    this.store.dispatch(LoginUser({ login }));
  }

  public register(): void {
    this.route.navigate(['/product/register']);
  }

}