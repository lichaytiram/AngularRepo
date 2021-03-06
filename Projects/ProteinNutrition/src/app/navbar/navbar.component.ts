import { Component, OnInit, OnDestroy } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Subscription, of } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { IProductsState, getPopup } from '../store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  // Toggles
  public popupToggle: boolean;

  private unSubscribe: Subscription[] = [];

  constructor(private store: Store<IProductsState>) { }

  ngOnInit() {

    this.unSubscribe.push(this.store.pipe(select(getPopup)).subscribe(
      popupToggle => this.popupToggle = popupToggle,
      catchError(error => of(console.log(error)))
    ));

  }

  ngOnDestroy() {

    this.unSubscribe.forEach(subscribe => subscribe.unsubscribe());

  }

  public login(): string {
    return !!sessionStorage.getItem('login') ? "" : "login";
  }

}