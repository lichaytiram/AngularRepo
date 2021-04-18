import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ISwimsuit } from '../shared/models/ISwimsuit.model';

import { Store, select } from '@ngrx/store';
import { IProductsState } from '../store/reducers';
import { getAllSwimsuits } from '../store/selectors';
import { addToFavorite, LoadSwimsuit } from '../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public swimsuits$: Observable<ISwimsuit[]> = this.store.pipe(select(getAllSwimsuits));

  constructor(private store: Store<IProductsState>) { }

  ngOnInit(): void {

    this.store.dispatch(LoadSwimsuit());

  }

  public favorite(swimsuit: ISwimsuit): void {

    this.store.dispatch(addToFavorite({swimsuit}));

  }

}
