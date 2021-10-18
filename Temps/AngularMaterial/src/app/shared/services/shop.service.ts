import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { IShopStore } from '../models/shop.models/shopt.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private api: string = 'http://localhost:3000';
  private shopStore: BehaviorSubject<IShopStore> = new BehaviorSubject<IShopStore>({ shop: [], cart: [], favorite: [] });

  constructor(private http: HttpClient) { }

  public getShops(): Observable<string[]> {
    const api: string = `${this.api}/shop`;
    return this.http.get<string[]>(api);
  }

  public getCarts(): Observable<string[]> {
    return this.shopStore.pipe(pluck('cart'));
  }

  public getFavorites(): Observable<string[]> {
    const api: string = `${this.api}/favorites`;
    return this.http.get<string[]>(api);
  }

  public addToCart(item: string) {

    const shopStore = this.shopStore.getValue();
    shopStore.cart.push(item);
    this.shopStore.next(shopStore);

  }

}
