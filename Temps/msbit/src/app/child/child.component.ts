import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public firstName: string = '';
  public lastName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public updateFirstName(firstName: string): void {
    this.firstName = firstName;
  }
  public updateLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public logIt(): void {
    console.log(this.firstName);
    console.log(this.lastName);

  }

}
