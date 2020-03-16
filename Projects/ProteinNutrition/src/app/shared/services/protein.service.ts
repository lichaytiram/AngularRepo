import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProtein } from '../models/iProtein.model';
import { catchError } from 'rxjs/operators';
import { IId } from '../models/iId.model';

@Injectable({
  providedIn: 'root'
})
export class ProteinService {

  private URL: string = "https://protein-757b1.firebaseio.com/proteins/";
  private endURL: string = ".json";

  constructor(private http: HttpClient) { }

  public createProtein(userId: string, protein: IProtein): Observable<IId> {
    const url = `${this.URL}/${userId}${this.endURL}`;
    return this.http.post<IId>(url, protein).pipe(
      catchError(error => Observable.throw(error.json())))
  }

}
