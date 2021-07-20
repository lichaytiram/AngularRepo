import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
})
export class ContactInfoComponent implements OnInit {
  @Input() parent: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {}

  get stocks() {
    console.log(this.parent);

    return (this.parent.get('contactInfo') as FormArray)
      .controls as FormGroup[];
  }
  log(stock: any) {
    console.log(stock);
  }
}
