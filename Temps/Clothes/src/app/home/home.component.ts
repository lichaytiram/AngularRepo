import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { IProductsState } from '../store';
import { getAllClothes } from '../store/selectors/clothe.selectors';
import { getFailAddCart } from '../store/selectors/cart.selectors';
import { LoadClothes } from '../store/actions/clothe.action';
import { AddCart, FailAddOff } from '../store/actions/cart.action';

import { IClothe } from '../shared/models/iClothe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public clothes$: Observable<IClothe[]> = this.store.pipe<IClothe[]>(select(getAllClothes));
  public addCart: Observable<boolean> = this.store.pipe<boolean>(select(getFailAddCart));

  constructor(private store: Store<IProductsState>) { }

  ngOnInit(): void {

    this.store.dispatch(LoadClothes());
  }

  public saveToCart(cart: IClothe): void {
    this.store.dispatch(AddCart({ cart: cart }));
  }

  public getFailAddCartOff(): void {
    this.store.dispatch(FailAddOff());
  }

}
