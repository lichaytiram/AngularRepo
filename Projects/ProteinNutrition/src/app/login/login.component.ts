import { Component, OnInit } from '@angular/core';
import { ILogin } from '../shared/models/iLogin.model';
import { Login } from '../shared/models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: ILogin;

  constructor(private route: Router) { }

  ngOnInit() {
    this.login = new Login(undefined, undefined);
  }

  public userLogin(): void {
    console.log("allow");

  }

  public register(): void {
    this.route.navigate(['/product/register']);
  }

}
