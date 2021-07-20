import { IContactInfo } from './IContactInfo.model';

export class ContactInfo implements IContactInfo {
  constructor(
    public typeOfContact: string,
    public label: string,
    public value: string
  ) {}
}
