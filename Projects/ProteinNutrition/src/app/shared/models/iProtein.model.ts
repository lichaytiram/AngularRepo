import { IEgg } from './iEgg.model';

export interface IProtein {
    id?: number;
    egg?: IEgg;
    bread?: number;
    tuna?: number;
    meat?: number;
    cheese?: number;
    cottage?: number;
    quinoa?: number;
    almonds?: number;
    powder?: number;
    gainer?: number;
}