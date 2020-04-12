import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/iUser.model';
import { catchError, map, switchMap, tap, take } from 'rxjs/operators';
import { ILogin } from '../models/iLogin.model';
import { IId } from '../models/iId.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL: string = "https://protein-757b1.firebaseio.com/users";
  private endURL: string = ".json";

  constructor(private http: HttpClient) { }

  public createUser(user: IUser): Observable<IId> {
    const url = this.URL + this.endURL;
    return this.http.post<IId>(url, user)
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  public getAllUsers(): Observable<IUser[]> {
    const url = this.URL + this.endURL;
    return this.http.get<IUser[]>(url)
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  // Firebase database request, don't have any straight way (api)
  public login(login: ILogin): Observable<IUser> {
    const url = this.URL + this.endURL;
    return this.http.get<Observable<IUser>>(url)
      .pipe(
        map(
          result => {
            let register: IUser = null;

            Object.entries(result).some(value => {

              if (value[1].username === login.username && value[1].password === login.password) {
                value[1].id = value[0];
                register = value[1];
                return true;
              };
            });

            return register;
          }),
        catchError(error => Observable.throw(error.json())));
  }

  public getUser(userId: string): Observable<IUser> {
    const url = `${this.URL}/${userId}${this.endURL}`;
    return this.http.get<IUser>(url)
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  public deleteUser(userId: string): Observable<any> {
    const url = `${this.URL}/${userId}${this.endURL}`;
    return this.http.delete(url).pipe(
      catchError(error => Observable.throw(error.json())));
  }

  public updateUser(user: IUser): Observable<IUser> {
    const { id, ...userToUpdate } = user;
    const url = `${this.URL}/${id}${this.endURL}`;
    return this.http.put<IUser>(url, userToUpdate).pipe(
      catchError(error => Observable.throw(error.json())));
  }

}
