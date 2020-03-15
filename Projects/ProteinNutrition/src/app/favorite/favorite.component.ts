import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {


  public login: boolean;

  constructor(private router: Router) { }

  ngOnInit() {

    let isLogin: boolean = !!sessionStorage.getItem("login");
    this.login = isLogin ? true : false;


  }

  public loginPage() {
    this.router.navigate(['/product/login']);
  }



}
