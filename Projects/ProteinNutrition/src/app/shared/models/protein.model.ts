import { IProtein } from './iProtein.model';

export class Protein implements IProtein {
    constructor(
        public id?: number,
        public egg?: number,
        public bread?: number,
        public tuna?: number,
        public meat?: number,
        public cheese?: number,
        public cottage?: number,
        public quinoa?: number,
        public almonds?: number,
        public powder?: number,
        public gainer?: number
    ) { }
}