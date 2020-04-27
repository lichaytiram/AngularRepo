import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IProtein } from '../shared/models/iProtein.model';
import { IUser } from '../shared/models/iUser.model';
import { Protein } from '../shared/models/protein.model';
import { Egg } from '../shared/models/egg.model';

import { Store, select } from '@ngrx/store';
import { AddProtein } from '../store/actions/protein.action'
import { IProductsState, getUser, getPopup } from '../store';
import { UserPopupOn, UserPopupOff } from '../store/actions/user.action'

import { showCalculator } from '../shared/services/showCalculator';

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

  // Toggles
  public saveToggle: boolean;
  public popupToggle: boolean;

  private clearInterval = [];
  private unSubscribe: Subscription[] = [];

  constructor(private store: Store<IProductsState>, private router: Router, private showCalculator: showCalculator) { }

  ngOnInit() {

    this.protein = new Protein(new Egg());

    if (!!localStorage.getItem("acccept")) {
      this.acccept = true;
      this.visibility();
    }

    this.unSubscribe.push(this.store.pipe<IUser>(select(getUser)).subscribe(
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

    this.store.dispatch(UserPopupOff());
    this.clearInterval.forEach(id => clearInterval(id));
    this.unSubscribe.forEach(subscribe => subscribe.unsubscribe());

  }

  public popup(): void {

    this.clearInterval.push(setTimeout(() => {

      if (!this.user)
        this.store.dispatch(UserPopupOn());

      this.unSubscribe.push(this.store.pipe<boolean>(select(getPopup)).subscribe(
        popupToggle => this.popupToggle = popupToggle,
        catchError(error => of(console.log(error)))
      ))
    }, 8000))

  }

  public cancelPopup(): void {
    this.store.dispatch(UserPopupOff());
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

    // Create a new reference
    const protein: IProtein = { ...this.protein };
    const { egg } = protein
    protein.egg = { ...egg };

    // Send clean Object without undefined properties to Store
    Object.keys(protein).forEach(key => !protein[key] && delete protein[key]);
    if (!protein.egg || !protein.egg.sizeEgg || !protein.egg.amount)
      delete protein.egg;

    this.store.dispatch(AddProtein({ userId, protein }));
  }

  public show(): void {

    const { id, egg, ...protein } = this.protein;
    const sum: number = this.showCalculator.calculateProtein(protein, egg);

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

  // Check if form is valid ( one of input must be with value )
  public saveSwitch(): void {
    const { id, egg, ...protein } = this.protein;
    let updateToggle: boolean = false;
    Object.values(protein).some(value => value && (updateToggle = true) && true);
    egg.amount && egg.sizeEgg && (updateToggle = true);

    this.saveToggle = updateToggle;
  }

}