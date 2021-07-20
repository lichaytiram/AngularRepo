import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css'],
})
export class FormContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    userProfile: new FormGroup({
      name: new FormControl('', Validators.required),
      organization: new FormControl(''),
    }),
    contactInfo: new FormArray([
      new FormGroup({
          typeOfContact: new FormControl('email', Validators.required),
          label: new FormControl('', Validators.required),
          value: new FormControl('', Validators.required),
        }),
    ]),
  });

  public submit() {
    console.log('ngSubmit');
    console.log((this.form.get('userProfile') as FormGroup).value);
    console.log((this.form.get('contactInfo') as FormArray).value);
  }

  public addContact(): void {

  }


}
