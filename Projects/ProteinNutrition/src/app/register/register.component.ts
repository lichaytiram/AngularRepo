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

  constructor() { }

  ngOnInit() {
    this.register = new Register(undefined, undefined, undefined, undefined, undefined);
  }

  public createUser() {
    console.log(this.register);
  }

  html = '<span class="btn btn-danger waves-light">Your HTML here</span>';
}
