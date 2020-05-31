import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { CreateUser, UserCreatedOff } from '../store/actions/user.action';
import { getUserCreated } from '../store/selectors/user.selectors';
import { IProductsState } from '../store/reducers/index';

import { IUser } from '../shared/models/iUser.model';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public user: IUser;
  public terms: boolean;
  public userCreated$: Observable<boolean>;

  constructor(private store: Store<IProductsState>, private router: Router) { }

  ngOnInit() {
    this.user = new User(undefined, undefined, undefined, undefined, undefined);
    this.userCreated$ = this.store.pipe(select(getUserCreated));
  }

  ngOnDestroy() {
    this.store.dispatch(UserCreatedOff());
  }

  public createUserNavigate(): void {
    this.router.navigate(['product/account/login']);
  }

  public createUser(): void {

    const user = this.user;
    this.store.dispatch(CreateUser({ user }));

  }

  public showTerms(): void {
    this.terms = !this.terms;
  }

}
