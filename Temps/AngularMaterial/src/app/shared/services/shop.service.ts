import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private api: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getShops(): Observable<string[]> {
    const api: string = `${this.api}/shop`;
    return this.http.get<string[]>(api);
  }

}
