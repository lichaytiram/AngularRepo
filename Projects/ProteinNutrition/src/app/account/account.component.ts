import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { IProductsState } from '../store';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  constructor(private store: Store<IProductsState>, private router: Router) {

    let isLogin: boolean = !!sessionStorage.getItem("login");
    if (!isLogin)
      this.router.navigate(["product/login"]);

  }

  ngOnInit() {

  }

}
