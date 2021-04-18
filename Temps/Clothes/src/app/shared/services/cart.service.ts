import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IClothe } from '../models/iClothe.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private URL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  public getAllCarts(): Observable<IClothe[]> {

    const url = `${this.URL}carts`;
    return this.http.get<IClothe[]>(url).pipe(
      catchError(error => Observable.throw(error.json())));
  }

  public addCart(cart: IClothe): Observable<IClothe> {

    const url = `${this.URL}carts`;
    return this.http.post<IClothe>(url, cart).pipe(
      catchError(error => Observable.throw(error.json())));
  }

}
