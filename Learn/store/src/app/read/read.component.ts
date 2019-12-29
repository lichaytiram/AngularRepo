import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IProductesState } from '../shared/models/productesState.model';
import { Observable } from 'rxjs';
import { IPizzaState } from '../shared/models/pizzaState.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  public pizzas$: Observable<IPizzaState>;

  constructor(private store: Store<IProductesState>) { }

  ngOnInit() {
    this.pizzas$ = this.store.pipe(select('pizzas'))
  }

}
