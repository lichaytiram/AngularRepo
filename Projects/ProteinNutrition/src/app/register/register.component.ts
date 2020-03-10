import { Component, OnInit } from '@angular/core';
import { IRegister } from '../shared/models/iRegister.model';
import { Register } from '../shared/models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public register: IRegister;
  public terms: boolean;

  constructor() { }

  ngOnInit() {
    this.register = new Register(undefined, undefined, undefined, undefined, undefined);
  }

  public createUser(): void {
    console.log(this.register);
  }

  public showTerms(): void {
    this.terms = !this.terms;
  }

}
