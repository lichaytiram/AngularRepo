import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISwimsuit } from '../models/ISwimsuit.model';

@Injectable({
  providedIn: 'root'
})
export class SwimsuitService {

  private URL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  public getAllSwimsuits(): Observable<ISwimsuit[]> {
    const url: string = `${this.URL}swimsuits`;
    return this.http.get<ISwimsuit[]>(url).pipe(
      catchError(error => Observable.throw(error.json())));
  }

  public loadFavorite(): Observable<ISwimsuit[]> {
    const url: string = `${this.URL}favorite`;
    return this.http.get<ISwimsuit[]>(url).pipe(
      catchError(error => Observable.throw(error.json())));
  }

  public createFavorite(favorite: ISwimsuit): Observable<ISwimsuit> {
    const url: string = `${this.URL}favorite`;
    return this.http.post<ISwimsuit>(url, favorite).pipe(
      catchError(error => Observable.throw(error.json())));
  }

}