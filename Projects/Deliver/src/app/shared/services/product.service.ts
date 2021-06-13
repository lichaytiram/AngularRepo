import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from '../models/IProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL: string = "https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products";
  private endURL: string = ".json";

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<any[]> {
    const url = `${this.URL}${this.endURL}`;
    return this.http.get<any[]>(url).pipe(
      catchError(error => Observable.throw(error)));
  }

}
