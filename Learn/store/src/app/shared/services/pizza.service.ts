import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPizza } from '../models/Pizza.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  public getPizzas(): Observable<IPizza[]> {
    return this.http.get<IPizza[]>("http://localhost:3000/pizzas")
      .pipe(catchError(error => Observable.throw(error.json())))
  }

}