import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductesState } from '../shared/models/productesState.model';
import { Observable } from 'rxjs';
import { PizzaState } from '../shared/models/pizzaState.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  public pizzas$: Observable<PizzaState>;

  constructor(private store: Store<ProductesState>) { }

  ngOnInit() {
    this.pizzas$ = this.store.select('pizzas');
  }

}
