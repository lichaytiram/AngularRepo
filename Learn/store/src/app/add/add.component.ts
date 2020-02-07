import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IProductesState } from '../store';
import { AddPizza } from '../store/actions/pizzas.action'

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
    this.store.dispatch(AddPizza({ name: this.pizzaName }));
  }
}
