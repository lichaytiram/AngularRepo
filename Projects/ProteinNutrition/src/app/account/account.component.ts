import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { IProductsState } from '../store';
import { UserLogout, ProteinLogout, DeleteUser, DeleteAllProteins, UpdateUser, UserUpdated } from '../store/actions/index';
import { getUser, getUserUpdated } from '../store/selectors/user.selectors';

import { IUser } from '../shared/models/iUser.model';
import { User } from '../shared/models/user.model';
import { NgModel, NgForm } from '@angular/forms';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, OnDestroy {

  public user$: Observable<IUser>;
  public newUser: IUser;

  // toggles to show
  public editToggle: boolean;
  public usernameToggle: boolean;
  public passwordToggle: boolean;
  public genderToggle: boolean;
  public weightToggle: boolean;

  public updateToggle: boolean;

  // unSubscribe list
  private unSubscribe: Subscription[] = [];

  // click button for show password instead ******.
  public showPasswordToggle: boolean;

  constructor(private store: Store<IProductsState>, private router: Router) {

    let isLogin: boolean = !!sessionStorage.getItem("login");
    if (!isLogin)
      this.router.navigate(["product/login"]);

  }

  ngOnInit() {

    this.newUser = new User(undefined, undefined, undefined, undefined, undefined);

    this.user$ = this.store.pipe(select(getUser));

    this.unSubscribe.push(this.store.pipe(select(getUserUpdated)).subscribe(
      userUpdated => this.updateToggle = userUpdated,
      catchError(error => of(console.log(error))
      )
    ));

  }

  ngOnDestroy() {

    this.unSubscribe.forEach(subscribe => subscribe.unsubscribe());

  }

  public logout(): void {

    this.store.dispatch(UserLogout());
    this.store.dispatch(ProteinLogout());

    this.router.navigate(["product/home"]);
  }

  public deleteAccount(userId: string): void {
    const isConfirm = confirm("You are try to delete your account!\nYou are sure?");

    // Should be one function , FireBase (data base) don't save proteins id as a foreign key.
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
    this.allTogglesOff();
  }

  // check if one of Toggles is on
  public allowToEdit(): boolean {

    if (this.editToggle && this.findAvailableToken())
      return true;
    return false;

  }

  // check if one of Toggles is on and return toggle name
  private findAvailableToken(): string {

    if (this.usernameToggle)
      return "username";

    if (this.passwordToggle)
      return "password";

    if (this.genderToggle)
      return "gender";

    if (this.weightToggle)
      return "weight";

    return null;

  }

  public showPasswordSwitch() {
    this.showPasswordToggle = !this.showPasswordToggle;
  }

  public nameToggle(toggleName: string): void {

    this.newUser = new User(undefined, undefined, undefined, undefined, undefined);

    this.allTogglesOff();

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

  public cancelTogglesOff(firstInput?: NgModel, secondInput?: NgModel) {

    if (firstInput)
      firstInput.reset();

    if (secondInput)
      secondInput.reset();

    this.allTogglesOff();
  }

  public allTogglesOff(): void {
    this.usernameToggle = false;
    this.passwordToggle = false;
    this.genderToggle = false;
    this.weightToggle = false;
  }

  public updateUser(oldUser: IUser, userForm: NgForm): void {

    const valueToUpdate: string = this.findAvailableToken();

    let user: IUser = { ...oldUser };
    const userValue = { ...this.newUser }

    // Update the user with new value
    switch (valueToUpdate) {
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

    setTimeout(() => {
      this.store.dispatch(UserUpdated());
      this.allTogglesOff();

      if (valueToUpdate != "gender")
        userForm.controls[valueToUpdate].reset();

    }, 2000);

  }

}
