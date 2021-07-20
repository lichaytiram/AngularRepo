import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, map, startWith, tap } from 'rxjs/operators';

export interface IForm {
  email: string;
  password: string;
}

export class Form implements IForm {
  constructor(public email: string, public password: string) {}
}

export class LoginFormGroup extends FormGroup {
  email: FormControl;
  password: FormControl;

  constructor(minLength: number = 5) {
    super({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(minLength),
      ]),
    });
    this.email = this.get('email') as FormControl;
    this.password = this.get('password') as FormControl;
  }

  get emailText$() {
    return this.email.valueChanges;
  }

}
