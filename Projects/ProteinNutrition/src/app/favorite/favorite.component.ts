import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IProductsState } from '../store';
import { DeleteProtein } from '../store/actions/protein.action';

import { getUser, getAllProteins } from '../store/selectors'
import { Observable } from 'rxjs';
import { IUser } from '../shared/models/iUser.model';
import { IProtein } from '../shared/models/iProtein.model';
import { showCalculator } from '../shared/services/showCalculator';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  public user$: Observable<IUser>
  public proteins$: Observable<IProtein[]>

  // Messages to user
  public showMessage: string = "";
  public showMessageLogin: string = "";

  // Toggles
  public editToggle: number;

  constructor(private store: Store<IProductsState>, private router: Router, private showCalculator: showCalculator) { }

  ngOnInit() {

    this.user$ = this.store.pipe(select(getUser));
    this.proteins$ = this.store.pipe(select(getAllProteins));

  }

  public loginPage(): void {
    this.router.navigate(['/product/login']);
  }

  public delete(userId: string, proteinId: string): void {

    this.store.dispatch(DeleteProtein({ userId, proteinId }));

  }

  public show(user: IUser, tempProtein: IProtein): void {

    const { id, egg, ...protein } = tempProtein;
    const sum: number = this.showCalculator.calculateProtein(protein, egg);

    const value: number = user.weight * 2 - sum;
    this.showMessage = `You eat ${sum} protein approximately.`;
    this.showMessageLogin = value > 0 ? `You need more ${value}` : 'You Eat enough protein for today good job!';

    this.visibilityOn('show');
  }

  public cancelShow(): void {
    this.visibilityOff('show');
  }

  public edit(editToggle: number): void {
    this.editToggle = editToggle;
  }

  public save(index): void {
    console.log(index);

  }

  private visibilityOn(name: string): void {
    document.getElementById(name).className = "visibility: visible";
  }

  private visibilityOff(name: string): void {
    document.getElementById(name).className = "visibility: invisible";
  }

}
