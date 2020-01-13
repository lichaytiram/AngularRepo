import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IProductesState } from '../shared/models/productesState.model';
import { Observable } from 'rxjs';
import * as fromStore from '../store/reducers/index';
import { IPizza } from '../shared/models/Pizza.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  public pizzas$: Observable<IPizza[]>;

  constructor(private store: Store<IProductesState>) { }

  ngOnInit() {
    this.pizzas$ = this.store.pipe(select(fromStore.getAllPizzas))
    this.store.pipe(select(fromStore.getAllPizzas)).subscribe(
      res => console.log(res))
  }

}
