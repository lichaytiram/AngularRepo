import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IClothe } from '../models/iClothe.model';

@Injectable({
  providedIn: 'root'
})
export class ClotheService {

  private URL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  public getAllClothes(): Observable<IClothe[]> {
    const url = `${this.URL}clothes`;
    return this.http.get<IClothe[]>(url).pipe(
      catchError(error => Observable.throw(error.json())));
  }
}
