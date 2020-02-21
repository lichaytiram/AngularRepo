import { Component, OnInit } from '@angular/core';

import { IProtein } from '../shared/models/iProtein.model';
import { Protein } from '../shared/models/protein.model';
import { AddProteinSuccess } from '../store/actions/protein.action'

import { Store } from '@ngrx/store';
import { IProductsState } from '../store';


import { switchMap, map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public login: boolean;
  public protein: IProtein;

  constructor(private store: Store<IProductsState>) { }

  ngOnInit() {

    if (!!localStorage.getItem("login")) {
      this.login = true;
      this.protein = new Protein();
    }

  }

  public isLogin(): void {
    this.login = true;
    localStorage.setItem('login', "true");
  }

  public submit(): void {
    this.store.dispatch(AddProteinSuccess({ protein: this.protein }))

    // this.store.pipe(
    //   map(() => AddProteinSuccess({ protein: this.protein })
    //   ))

  }

  public show(): void {
    console.log(this.protein);
  }

}
