import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IProductsState } from '../store';
import { UpdateProtein, DeleteProtein } from '../store/actions/protein.action';

import { getUser, getAllProteins } from '../store/selectors'
import { Observable } from 'rxjs';

import { IUser } from '../shared/models/iUser.model';
import { IProtein } from '../shared/models/iProtein.model';
import { Protein } from '../shared/models/protein.model';
import { showCalculator } from '../shared/services/showCalculator';
import { Egg } from '../shared/models/egg.model';
import { IEgg } from '../shared/models/iEgg.model';

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

  public cancelEdit(): void {
    this.editToggle = undefined;
  }


  public deleteOneProtein(userId: string, proteinId: string, key: string): void {

    const index: number = this.editToggle;
    this.deleteElement(key, index);
    this.save(userId, proteinId);

  }

  public save(userId: string, proteinId: string): void {

    const index: number = this.editToggle;
    const protein: IProtein = new Protein();
    protein.id = proteinId;

    Object.keys(protein).filter(key => key !== 'id' && key !== 'egg').forEach(key => {

      const value = this.getInputValue(key, index);
      if (value)
        protein[key] = value;

    });

    if (this.getInputValue('amount', index) && this.getInputValue('sizeEgg', index)) {

      const amount: number = Number(this.getInputValue('amount', index));
      const sizeEgg: string = this.getInputValue('sizeEgg', index);
      const egg: IEgg = new Egg(amount, sizeEgg);
      protein.egg = egg;
    }

    // Send clean Object without undefined properties to Store
    Object.keys(protein).forEach(key => !protein[key] && delete protein[key]);
    if (!protein.egg || !protein.egg.sizeEgg || !protein.egg.amount)
      delete protein.egg;

    this.store.dispatch(UpdateProtein({ userId, protein }));
    this.cancelEdit();

  }

  // Get element value by his id ( id is contain key and index of array -HTML Template- ).
  private getInputValue(key: string, index: number): string {
    const elementId: string = key + index;
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
    return inputElement && inputElement.value;
  }

  private deleteElement(key: string, index: number): void {
    const elementId: string = key + index;
    document.getElementById(elementId).remove();
  }

  private visibilityOn(name: string): void {
    document.getElementById(name).className = "visibility: visible";
  }

  private visibilityOff(name: string): void {
    document.getElementById(name).className = "visibility: invisible";
  }

}
