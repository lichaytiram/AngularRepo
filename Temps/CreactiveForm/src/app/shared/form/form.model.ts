import { FormControl, FormGroup, Validators } from "@angular/forms";
import {filter, map, startWith, tap} from 'rxjs/operators';
export class Form {
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

  get trimmerText$() {
    return this.emailText$.pipe( startWith(' '), filter(email => !!email), map((email) => email.trim()) );
  }

  get password$() {
    return this.password.valueChanges;
  }
}
