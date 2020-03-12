import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IRegister } from '../models/iRegister.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public createUser(user: IRegister): Observable<IRegister> {
    return this.http.post<IRegister>('http://localhost:3000/users', user)
      .pipe(catchError(error => Observable.throw(error.json())))
  }

}
