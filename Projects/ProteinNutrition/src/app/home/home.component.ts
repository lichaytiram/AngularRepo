import { Component, OnInit } from '@angular/core';

import { IProtein } from '../shared/models/iProtein.model';
import { Protein } from '../shared/models/protein.model';
import { AddProteinSuccess } from '../store/actions/protein.action'

import { Store } from '@ngrx/store';
import { IProductsState } from '../store';

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
      this.protein = new Protein(0);
    }

  }

  public isLogin(): void {
    this.login = true;
    localStorage.setItem('login', "true");
  }

  public submit(): void {

    this.protein.id += 1
    const protein: IProtein = { ...this.protein };

    this.store.dispatch(AddProteinSuccess({ protein: protein }));
  }

  public show(): void {
    console.log(this.protein);
  }

}
