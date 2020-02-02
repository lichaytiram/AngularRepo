import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IProductesState } from '../store';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public pizzaName: string;

  constructor(private store: Store<IProductesState>) { }

  ngOnInit() { }

  public addPizza() {
    console.log(this.pizzaName);

  }

  // inner(id: number) {
  //   this.route.navigate([`/product/${id}`]);
  // }

}
