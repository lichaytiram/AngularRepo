import { Injectable } from '@angular/core';
import { IProtein } from '../models/iProtein.model';
import { IEgg } from '../models/iEgg.model';

@Injectable({
  providedIn: 'root'
})
export class showCalculator {

  constructor() { }

  public calculateProtein(protein: IProtein, egg: IEgg): number {

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

    return Number.parseFloat(sum.toFixed(4));

  }
  
}
