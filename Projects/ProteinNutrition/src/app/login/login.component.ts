import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ILogin } from '../shared/models/iLogin.model';
import { Login } from '../shared/models/login.model';

import { Store } from '@ngrx/store';
import { IProductsState } from '../store';
import { loginUser } from '../store/actions/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: ILogin;

  constructor(private store: Store<IProductsState>, private route: Router) { }

  ngOnInit() {
    this.login = new Login(undefined, undefined);
  }

  public userLogin(): void {
    const login: ILogin = this.login;
    this.store.dispatch(loginUser({ login }));
  }

  public register(): void {
    this.route.navigate(['/product/register']);
  }

}
