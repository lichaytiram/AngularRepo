import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public account: string;

  constructor() {
    const login: boolean = !!sessionStorage.getItem('key');
    this.account = login ? "account" : "login";
  }

}