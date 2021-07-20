import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { LoginFormGroup } from 'src/app/shared/form/form.model';
import { ESelectedForm } from './child.models';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  public selectedForm: ESelectedForm = ESelectedForm.None;
  public eSelectedForm: typeof ESelectedForm = ESelectedForm;

  form: LoginFormGroup = new LoginFormGroup();

  constructor() {}

  ngOnInit(): void {}

  public selectForm(form: ESelectedForm) {
    this.selectedForm = form;
    this.form.reset();
  }
}
