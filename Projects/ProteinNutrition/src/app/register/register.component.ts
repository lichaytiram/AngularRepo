import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/models/iUser.model';
import { User } from '../shared/models/user.model';
import { CreateUser, CreateUserSuccess } from '../store/actions/user.action';
import { IProductsState } from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: IUser;
  public terms: boolean;

  // Toggles
  // public registerToggle: boolean;

  constructor(private store: Store<IProductsState>) { }

  ngOnInit() {
    this.user = new User(undefined, undefined, undefined, undefined, undefined);
  }

  // public createUser

  public createUser(): void {

    const user = this.user;
    this.store.dispatch(CreateUser({ user }));

  }

  public showTerms(): void {
    this.terms = !this.terms;
  }

}
