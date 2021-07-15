import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public firstName: string = '';
  public lastName: string = '';

  @Output() firstNameTop: EventEmitter<string> = new EventEmitter<string>();
  @Output() lastNameTop: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    this.firstNameTop.emit(this.firstName);
    this.lastNameTop.emit(this.lastName);
  }

}
