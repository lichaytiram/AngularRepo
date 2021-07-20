import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { FormGroup, FormControl } from '@angular/forms';
import { Form, IForm, LoginFormGroup } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() form: LoginFormGroup = new LoginFormGroup();

  constructor() {}

  ngOnInit(): void {}

  public submit() {
    const email: string = this.form.email.value;
    const password: string = this.form.password.value;
    const form: IForm = new Form(email, password);
    this.form.reset();
    console.log(form);
  }

  emailValidator() {
    const emailRef = this.form.email;
    return emailRef?.touched && emailRef?.invalid;
  }

  passwordValidator() {
    const passwordRef = this.form.password;
    return passwordRef?.touched && passwordRef?.invalid;
  }
}
