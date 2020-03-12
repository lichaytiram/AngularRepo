import { Component, OnInit } from '@angular/core';
import { IRegister } from '../shared/models/iRegister.model';
import { Register } from '../shared/models/register.model';
import { createUser, createUserSuccess } from '../store/actions/user.action';
import { IProductsState } from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public register: IRegister;
  public terms: boolean;

  constructor(private store: Store<IProductsState>) { }

  ngOnInit() {
    this.register = new Register(undefined, undefined, undefined, undefined, undefined);
  }

  public createUser(): void {
    this.store.dispatch(createUser({ register: this.register }));
  }

  public showTerms(): void {
    this.terms = !this.terms;
  }

}
