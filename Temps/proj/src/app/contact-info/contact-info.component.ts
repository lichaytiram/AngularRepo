import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ETypeOfContact } from '../shared/enums/ETypeOfContact.enum';
import { ContactInfo } from '../shared/models/ContactInfo.model';
import { IContactInfo } from '../shared/models/IContactInfo.model';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
})
export class ContactInfoComponent implements OnInit {
  @Input() contactInfo: FormArray = new FormArray([]);
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  typeOfContactSelected: string[] = Object.values(ETypeOfContact);
  ETypeOfContact = ETypeOfContact;
  constructor() { }

  ngOnInit(): void { }

  get contacts(): FormGroup[] {
    return this.contactInfo.controls as FormGroup[];
  }

  public removeContact(index: number): void {
    this.remove.emit(index);
  }

}
