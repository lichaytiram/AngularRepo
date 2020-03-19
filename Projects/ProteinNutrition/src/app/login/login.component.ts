import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ILogin } from '../shared/models/iLogin.model';
import { Login } from '../shared/models/login.model';

import { Store } from '@ngrx/store';
import { IProductsState } from '../store';
import { loginUser } from '../store/actions/user.action';
import { LoadProteins } from '../store/actions/protein.action';

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
    this.store.dispatch(loginUser({ login: this.login }));
    const id: string = sessionStorage.getItem("login");
    this.store.dispatch(LoadProteins({ userId: id }));
  }

  public register(): void {
    this.route.navigate(['/product/register']);
  }

}
