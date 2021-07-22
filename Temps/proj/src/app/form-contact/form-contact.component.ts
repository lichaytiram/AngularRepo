import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactInfo } from '../shared/models/ContactInfo.model';
import { FormContactValidators } from '../shared/validators/formContact.validator';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css'],
})
export class FormContactComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  form: FormGroup = new FormGroup({
    userProfile: new FormGroup({
      name: new FormControl('', Validators.required),
      organization: new FormControl(''),
    }),
    contactInfo: new FormArray([this.createContactInfo()]),
  });

  get formGroup(): FormGroup {
    return this.form.get('userProfile') as FormGroup;
  }

  get fromArray(): FormArray {
    return this.form.get('contactInfo') as FormArray;
  }

  public submit() {
    if (!this.form.valid)
      return;

    console.log((this.form.get('userProfile') as FormGroup).value);
    console.log((this.form.get('contactInfo') as FormArray).value);
    this.router.navigate(['product/show']);

  }

  public createContactInfo(): FormGroup {
    return new FormGroup({
      typeOfContact: new FormControl('Email', Validators.required),
      label: new FormControl('', [Validators.required, Validators.minLength(3)]),
      value: new FormControl('', Validators.required),
    }, { validators: FormContactValidators.emailOrPhoneSelected });
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
