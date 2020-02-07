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

  public addPizza(myName: string): Observable<IPizza> {
    const pizza = { "name": myName };
    return this.http.post<IPizza>("http://localhost:3000/pizzas", pizza)
      .pipe(catchError(error => Observable.throw(error.json())))
  }

  public deletePizza(id: number): Observable<number> {
    return this.http.delete<number>(`http://localhost:3000/pizzas/${id}`)
      .pipe(catchError(error => Observable.throw(error.json())))
  }

}