import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProductesState } from '../shared/models/productesState.model';
import { IPizzaState } from '../shared/models/pizzaState.model';
import * as fromPizzas from '../store/actions/pizzas.action'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public pizzas$: IPizzaState;

  constructor(private store: Store<IProductesState>) { }

  ngOnInit() { }

  dispach() {
    this.store.dispatch(fromPizzas.LoadPizzas());
  }

}
