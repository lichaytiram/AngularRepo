import { IProtein } from './iProtein.model';
import { IEgg } from './iEgg.model';

export class Protein implements IProtein {
    constructor(
        public egg?: IEgg,
        public bread?: number,
        public tuna?: number,
        public meat?: number,
        public cheese?: number,
        public cottage?: number,
        public quinoa?: number,
        public almonds?: number,
        public powder?: number,
        public gainer?: number,
        public id?: string
    ) { }
}