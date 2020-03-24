import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { IProductsState } from '../store';
import { UserLogout, ProteinLogout, DeleteUser, DeleteAllProteins, UpdateUser } from '../store/actions/index';
import { getUser } from '../store/selectors/user.selectors';

import { IUser } from '../shared/models/iUser.model';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public user$: Observable<IUser>;
  public newUser: IUser;

  // toggles to show
  public editToggle: boolean;
  public usernameToggle: boolean;
  public passwordToggle: boolean;
  public genderToggle: boolean;
  public weightToggle: boolean;

  constructor(private store: Store<IProductsState>, private router: Router) {

    let isLogin: boolean = !!sessionStorage.getItem("login");
    if (!isLogin)
      this.router.navigate(["product/login"]);

  }

  ngOnInit() {

    this.user$ = this.store.pipe(select(getUser));

    // Delete later ---------------------------------------------------------------
    this.newUser = new User(undefined, undefined, undefined, undefined, undefined);

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
    this.editToggle = true;
  }

  public editToggleOff(): void {
    this.editToggle = false;
    this.allToggleOff();
  }

  public nameToggle(toggleName: string): void {

    this.newUser = new User(undefined, undefined, undefined, undefined, undefined);

    this.allToggleOff();

    switch (toggleName) {
      case "username":
        this.usernameToggle = true;
        break;
      case "password":
        this.passwordToggle = true;
        break;
      case "gender":
        this.genderToggle = true;
        break;
      case "weight":
        this.weightToggle = true;
        break;
      default:
        alert("Something was wrong!\nPlease try again.");
    }

  }

  public allToggleOff(): void {
    this.usernameToggle = false;
    this.passwordToggle = false;
    this.genderToggle = false;
    this.weightToggle = false;
  }

  public updateUser(oldUser: IUser, indexToUpdate: string): void {

    let user: IUser = { ...oldUser };
    const userValue = { ...this.newUser }

    // Update the user with new value
    switch (indexToUpdate) {
      case "username":
        user.username = userValue.username;
        break;
      case "password":
        user.password = userValue.password;
        user.confirmPassword = userValue.confirmPassword;
        break;
      case "gender":
        user.gender = userValue.gender;
        break;
      case "weight":
        user.weight = userValue.weight;
        break;
      default:
        alert("Something was wrong!\nPlease try again.");
    }

    this.store.dispatch(UpdateUser({ user }));
  }

}
