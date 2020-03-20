import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProtein } from '../models/iProtein.model';
import { catchError, map } from 'rxjs/operators';
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
      catchError(error => Observable.throw(error.json())));
  }

  // Firebase database request, don't have any straight way (api)
  public getProteins(userId: string): Observable<IProtein[]> {
    const url = `${this.URL}/${userId}${this.endURL}`;
    return this.http.get<Observable<IProtein[]>>(url)
      .pipe(
        map(
          result => {
            let proteins: IProtein[] = [];

            Object.entries(result).map(value => {
              value[1].id = value[0];
              proteins.push(value[1]);
            })

            return proteins;
          }),
        catchError(error => Observable.throw(error.json())));
  }

  public deleteProtein(userId: string, proteinId: string): Observable<any> {
    const url = `${this.URL}/${userId}/${proteinId}${this.endURL}`;
    return this.http.delete(url).pipe(
      catchError(error => Observable.throw(error.json())));
  }

}
