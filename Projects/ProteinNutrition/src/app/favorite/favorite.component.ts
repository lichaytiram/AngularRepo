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

  // Add values for create add of lines in favorites
  public addList: string[];
  public add: string;

  // Messages to user
  public showMessage: string = "";
  public showMessageLogin: string = "";

  // Toggles
  public editToggle: number;
  public addToggle: boolean;
  public updateToggle: boolean;
  public deleteToggle: boolean;

  constructor(private store: Store<IProductsState>, private router: Router, private showCalculator: showCalculator) { }

  ngOnInit() {

    this.addList = [];
    this.user$ = this.store.pipe(select(getUser));
    this.proteins$ = this.store.pipe(select(getAllProteins));

  }

  // Add one element inside existing protein
  public addProtein(userId: string, protein: IProtein): void {

    const valueToAdd: string = this.add;

    if (valueToAdd === undefined)
      return;

    if (valueToAdd === 'egg') {
      const egg: IEgg = new Egg(0, 'empty');
      protein.egg = egg;
    } else
      protein[valueToAdd] = 0;

    this.store.dispatch(UpdateProtein({ userId, protein }));
    this.addToggle = false;


  }

  public saveNewUpdate(userId: string, proteinId: string): void {

    const index: number = this.editToggle;
    const protein: IProtein = new Protein();

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

    if (!protein.egg || !protein.egg.sizeEgg)
      delete protein.egg;

    if (this.checkUpdateValidation(protein)) {
      protein.id = proteinId;
      this.store.dispatch(UpdateProtein({ userId, protein }));
      this.cancelEdit();
    } else
      this.updateToggle = true;

  }

  public loginPage(): void {
    this.router.navigate(['/product/login']);
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

  public editToggleSwitch(editToggle: number): void {
    this.editToggle = editToggle;
    this.addToggle = undefined;
  }

  public updateToggleSwitch(): void {
    this.updateToggle = undefined;
  }

  public deleteProteinSwitch(): void {
    this.deleteToggle = !this.deleteToggle;
  }

  public addToggleSwitch(protein: IProtein): void {

    const tempList: IProtein = new Protein();
    const addList: string[] = [];

    Object.keys(protein).forEach(key => delete tempList[key]);
    Object.keys(tempList).forEach(key => addList.push(key));

    this.addToggle = true;
    this.addList = addList;
  }

  public cancelEdit(): void {
    this.editToggle = undefined;
    this.addToggle = undefined;
  }

  public deleteProteinConfirmed(userId: string, proteinId: string): void {

    this.store.dispatch(DeleteProtein({ userId, proteinId }));
    this.deleteProteinSwitch();

  }

  public deleteOneProtein(userId: string, proteinId: string, key: string): void {

    const index: number = this.editToggle;
    if (key === 'egg') {
      this.deleteElement('amount', index);
      this.deleteElement('sizeEgg', index);
    } else
      this.deleteElement(key, index);

    this.saveNewUpdate(userId, proteinId);

  }

  private checkUpdateValidation(protein: IProtein): boolean {

    const { egg, ...pro } = protein;

    if (egg && egg.amount < 0)
      return false;

    let validation: boolean = true
    Object.values(pro).some(value => value < 0 && (validation = false) && true);

    return validation;
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
