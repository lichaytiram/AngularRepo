import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { IProtein } from '../shared/models/iProtein.model';
import { Protein } from '../shared/models/protein.model';
import { Egg } from '../shared/models/egg.model';
import { IEgg } from '../shared/models/iEgg.model';

import { Store, select } from '@ngrx/store';
import { AddProtein } from '../store/actions/protein.action'
import { IProductsState, getUser } from '../store';
import { of, Subscription } from 'rxjs';
import { IUser } from '../shared/models/iUser.model';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public acccept: boolean;
  public user: IUser;
  public protein: IProtein;

  // Messages to user
  public showMessage: string = "";
  public showMessageLogin: string = "";

  private clearInterval = [];
  private unSubscribe: Subscription[] = [];

  constructor(private store: Store<IProductsState>, private router: Router) { }

  ngOnInit() {

    this.protein = new Protein(new Egg());

    if (!!localStorage.getItem("acccept")) {
      this.acccept = true;
      this.visibility();
    }

    this.unSubscribe.push(this.store.pipe(select(getUser)).subscribe(
      user => {
        const userId: boolean = !!sessionStorage.getItem('login');

        if (!user && !userId)
          this.popup();

        this.user = user

      },
      catchError(error => of(console.log(error)))
    ));

  }

  ngOnDestroy() {

    this.clearInterval.forEach(id => clearInterval(id));
    this.unSubscribe.forEach(subscribe => subscribe.unsubscribe());

  }

  public popup(): void {

    this.clearInterval.push(setTimeout(() => {
      this.visibilityOn("popup")
    }, 8000))

  }

  public cancelPopup(): void {
    this.visibilityOff('popup');
  }

  public cancelShow(): void {
    this.visibilityOff('show');
  }

  public isAcccept(): void {

    this.acccept = true;
    this.visibility();
    localStorage.setItem('acccept', "true");
  }

  public submit(): void {

    const userId: string = this.user.id;
    const protein: IProtein = { ...this.protein };

    this.store.dispatch(AddProtein({ userId, protein }));
  }

  public show(): void {

    const { id, egg, ...protein } = this.protein;
    this.calculateProtein(protein, egg);
  }

  public calculateProtein(protein: IProtein, egg: IEgg): void {

    let sum: number = 0;

    if (egg.amount && egg.sizeEgg) {

      if (egg.sizeEgg === 'S')
        sum += egg.amount * 6.029;
      else egg.sizeEgg === 'M' ? sum += egg.amount * 7.285 : sum += egg.amount * 8.541;

    }

    protein.bread *= 3.24;
    protein.tuna /= 3.571428571428571;
    protein.meat /= 3.225806451612903;
    protein.cheese /= 10.52631578947368;
    protein.cottage /= 9.090909090909091;
    protein.quinoa /= 7.575757575757576;
    protein.almonds *= 6.154;
    protein.powder *= 25;
    protein.gainer *= 22;

    Object.values(protein).forEach(value => value ? sum += value : sum += 0);

    this.showMessage = `You eat ${sum} protein approximately.`;

    if (this.user) {
      const value: number = this.user.weight * 2 - sum;
      this.showMessageLogin = value > 0 ? `You need more ${value}` : 'You Eat enough protein for today good job!';
    }

    this.visibilityOn('show');

  }

  private visibility(): void {

    let timeToShow = 100;
    const { id, ...protein } = this.protein;
    Object.keys(protein).forEach(key => {
      this.clearInterval.push(setTimeout(() => this.visibilityOn(key), timeToShow));
      timeToShow += 250;
    });

    this.clearInterval.push(setTimeout(() => this.visibilityOn("submit"), timeToShow));

  }

  private visibilityOn(name: string): void {
    document.getElementById(name).className = "visibility: visible";
  }

  private visibilityOff(name: string): void {
    document.getElementById(name).className = "visibility: invisible";
  }

  public register(): void {
    this.router.navigate(['product/register']);
  }

  public loginPage(): void {
    this.router.navigate(['/product/login']);
  }

}