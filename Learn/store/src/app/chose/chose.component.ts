import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IProductsState, LoadPizzas } from '../store';
import { getSelectedPizza } from '../store/selectors/pizzas.selectors'
import { Observable } from 'rxjs';
import { IPizza } from '../shared/models/Pizza.model';

@Component({
  selector: 'app-chose',
  templateUrl: './chose.component.html',
  styleUrls: ['./chose.component.css']
})
export class ChoseComponent implements OnInit {

  public pizza$: Observable<IPizza>;

  constructor(private store: Store<IProductsState>) { }

  ngOnInit() {
    this.pizza$ = this.store.pipe(select(getSelectedPizza))
  }

}