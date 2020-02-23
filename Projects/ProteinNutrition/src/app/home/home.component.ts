import { Component, OnInit, OnDestroy } from '@angular/core';

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
export class HomeComponent implements OnInit, OnDestroy {

  public login: boolean;
  public protein: IProtein;
  private clearInterval = [];

  constructor(private store: Store<IProductsState>) { }

  ngOnInit() {

    this.protein = new Protein(0);

    if (!!localStorage.getItem("login")) {
      this.login = true;
      this.visibility();
    }

  }

  ngOnDestroy() {

    this.clearInterval.forEach(id => clearInterval(id))

  }

  public isLogin(): void {
    this.login = true;
    this.visibility();
    localStorage.setItem('login', "true");
  }

  public submit(): void {

    this.protein.id += 1
    const protein: IProtein = { ...this.protein };

    this.store.dispatch(AddProteinSuccess({ protein: protein }));
  }

  public show(): void {
    const { id, ...protein } = this.protein;
    this.calculateProtein(protein);
  }

  public calculateProtein(protein: IProtein): void {

    protein.egg *= 2;
    protein.bread *= 2;
    protein.tuna *= 2;
    protein.meat *= 2;
    protein.cheese *= 2;
    protein.cottage *= 2;
    protein.quinoa *= 2;
    protein.almonds *= 2;
    protein.powder *= 2;
    protein.gainer *= 2;

    let sum: number = 0;
    console.log(Object.values(protein));
    Object.values(protein).forEach(value => value ? sum += value : sum += 0);
    console.log("The sum is: " + sum);

  }

  private visibility(): void {



    let timeToShow = 100;
    const { id, ...protein } = this.protein;
    Object.keys(protein).forEach(key => {
      this.clearInterval.push(setTimeout(() => this.visibilityOn(key), timeToShow));
      timeToShow += 300;
    });

    this.clearInterval.push(setTimeout(() => this.visibilityOn("submit"), timeToShow));

  }

  private visibilityOn(name: string): void {
    document.getElementById(name).className = "visibility: visible";
  }

}