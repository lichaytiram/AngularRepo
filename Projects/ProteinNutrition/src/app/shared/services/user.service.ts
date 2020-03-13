import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IRegister } from '../models/iRegister.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL: string = "https://protein-757b1.firebaseio.com/users";
  private endURL: string = ".json";

  constructor(private http: HttpClient) { }

  public createUser(user: IRegister): Observable<IRegister> {
    const url = this.URL + this.endURL;
    return this.http.post<IRegister>(url, user)
      .pipe(catchError(error => Observable.throw(error.json())))
  }

  public getAllUsers(): Observable<IRegister[]> {
    const url = this.URL + this.endURL;
    return this.http.get<IRegister[]>(url)
      .pipe(catchError(error => Observable.throw(error.json())))
  }

  public login(userId: any): Observable<IRegister> {
    const url = this.URL + userId.name + this.endURL;
    return this.http.get<IRegister>(url)
      .pipe(catchError(error => Observable.throw(error.json())))
  }

}
