import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactInfo } from '../shared/models/ContactInfo.model';

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
    contactInfo: new FormArray([this.createContactInfo()]),
  });

  public submit() {
    console.log('ngSubmit');
    console.log((this.form.get('userProfile') as FormGroup).value);
    console.log((this.form.get('contactInfo') as FormArray).value);
  }

  public createContactInfo(): FormGroup {
    return new FormGroup({
      typeOfContact: new FormControl('Email', Validators.required),
      label: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required),
    });
  }

  public addContact(): void {
    const control = this.form.get('contactInfo') as FormArray;
    control.push(this.createContactInfo());
  }

  public removeContact(index: number): void {
    const control = this.form.get('contactInfo') as FormArray;
    control.removeAt(index);
  }
}
