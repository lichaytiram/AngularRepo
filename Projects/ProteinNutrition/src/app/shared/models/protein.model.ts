import { IProtein } from './iProtein.model';

export class Protein implements IProtein {
    constructor(
        public id?: number,
        public eggs?: number
    ) { }
}