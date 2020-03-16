import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IRegister } from '../models/iRegister.model';
import { catchError, map, switchMap, tap, take } from 'rxjs/operators';
import { ILogin } from '../models/iLogin.model';
import { Register } from '../models/register.model';
import { throwError } from 'rxjs';
import { IId } from '../models/iId.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL: string = "https://protein-757b1.firebaseio.com/users";
  private endURL: string = ".json";

  constructor(private http: HttpClient) { }

  public createUser(user: IRegister): Observable<IId> {
    const url = this.URL + this.endURL;
    return this.http.post<IId>(url, user)
      .pipe(catchError(error => Observable.throw(error.json())))
  }

  public getAllUsers(): Observable<IRegister[]> {
    const url = this.URL + this.endURL;
    return this.http.get<IRegister[]>(url)
      .pipe(catchError(error => Observable.throw(error.json())))
  }

  // Firebase database request, don't have any straight way (api)
  public login(login: ILogin): Observable<IRegister> {
    const url = this.URL + this.endURL;
    return this.http.get<Observable<IRegister>>(url)
      .pipe(
        map(
          result => {
            let register: IRegister = null;

            Object.entries(result).map(value => {

              if (value[1].username === login.username && value[1].password === login.password) {
                value[1].id = value[0];
                register = value[1];
              }
            })
            // server side don't throw an error.
            if (register == null)
              throw ('');
            return register;
          }),
        catchError(error => Observable.throw(error.json())))
  }

  public getUser(userId: string): Observable<IRegister> {
    const url = `${this.URL}/${userId}${this.endURL}`;
    return this.http.get<IRegister>(url)
      .pipe(catchError(error => Observable.throw(error.json())))
  }

}
