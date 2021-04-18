import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { IClothe } from '../shared/models/iClothe.model';
import { IProductsState } from '../store';
import { LoadCarts } from '../store/actions/cart.action';
import { getAllCarts } from '../store/selectors/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public carts$: Observable<IClothe[]> = this.store.pipe<IClothe[]>(select(getAllCarts));

  constructor(private store: Store<IProductsState>) { }

  ngOnInit(): void {

    this.store.dispatch(LoadCarts());
  }

}
