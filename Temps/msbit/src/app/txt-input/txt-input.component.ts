import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-txt-input',
  templateUrl: './txt-input.component.html',
  styleUrls: ['./txt-input.component.css']
})
export class TxtInputComponent implements OnInit {

  @Input() formGroup: FormGroup = new FormGroup({});

  @Input() controlName = TxtInputComponent.makeid(5);
  @Input() disabled = false;
  constructor() { }

  ngOnInit(): void {
    if (!this.formGroup) return;
    this.formGroup.addControl(this.controlName, new FormControl({value: null, disabled: this.disabled}));
  }

  private static makeid(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}
