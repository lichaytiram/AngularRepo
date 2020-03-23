import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { IProductsState } from '../store';
import { UserLogout, ProteinLogout, DeleteUser, DeleteAllProteins, UpdateUser } from '../store/actions/index';
import { getUser } from '../store/selectors/user.selectors';

import { IUser } from '../shared/models/iUser.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public user$: Observable<IUser>;
  public edit: boolean;
  public user: IUser;

  // toggles to show
  public username: boolean;
  public password: boolean;
  public gender: boolean;
  public weight: boolean;

  constructor(private store: Store<IProductsState>, private router: Router) {

    let isLogin: boolean = !!sessionStorage.getItem("login");
    if (!isLogin)
      this.router.navigate(["product/login"]);

  }

  ngOnInit() {

    this.user$ = this.store.pipe(select(getUser));

  }

  public logout(): void {

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

  public editToggleOn(): void {
    this.edit = true;
  }

  public editToggleOff(): void {
    this.edit = false;
    this.allToggleOff();
  }

  public usernameToggle(toggleName: string) {

    console.log(toggleName);

    this.allToggleOff();

    switch (toggleName) {
      case "username":
        this.username = true;
        break;
      case "password":
        this.password = true;
        break;
      case "gender":
        this.gender = true;
        break;
      case "weight":
        this.weight = true;
        break;
      default:
        alert("Something was wrong!\nPlease try again.");
    }

  }

  public allToggleOff(): void {
    this.username = false;
    this.password = false;
    this.gender = false;
    this.weight = false;
  }

  private updateUser(userToupdate: IUser, update: string, newValue: string): void {
    let { id, ...user } = userToupdate;
    console.log(user);
    this.store.dispatch(UpdateUser({ user }));
  }

}
