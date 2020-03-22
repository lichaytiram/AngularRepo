import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { IProductsState } from '../store';
import { UserLogout, ProteinLogout, DeleteUser, DeleteAllProteins } from '../store/actions/index';
import { getUser } from '../store/selectors/user.selectors';

import { IUser } from '../shared/models/iUser.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public user$: Observable<IUser>;

  constructor(private store: Store<IProductsState>, private router: Router) {

    let isLogin: boolean = !!sessionStorage.getItem("login");
    if (!isLogin)
      this.router.navigate(["product/login"]);

  }

  ngOnInit() {

    this.user$ = this.store.pipe(select(getUser));

  }

  public logout(userId: string): void {

    this.store.dispatch(UserLogout());
    this.store.dispatch(ProteinLogout());

    this.router.navigate(["product/home"]);
  }


  public deleteAccount(userId: string): void {
    const isConfirm = confirm("You are try to delete your account!\nYou are sure?");

    if (isConfirm) {
      this.store.dispatch(DeleteUser({ userId }));
      this.store.dispatch(DeleteAllProteins({ userId }));
    }

  }

}
