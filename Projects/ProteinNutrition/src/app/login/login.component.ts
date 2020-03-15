import { Component, OnInit } from '@angular/core';
import { ILogin } from '../shared/models/iLogin.model';
import { Login } from '../shared/models/login.model';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
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

  constructor(private store: Store<IProductsState>, private route: Router, private service: UserService) { }

  ngOnInit() {
    this.login = new Login(undefined, undefined);
  }

  public userLogin(): void {
    this.store.dispatch(loginUser({ login: this.login }));
  }

  public register(): void {
    this.route.navigate(['/product/register']);
  }

}
