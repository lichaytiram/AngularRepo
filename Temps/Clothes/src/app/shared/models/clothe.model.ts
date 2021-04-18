import { IClothe } from './iClothe.model';

export class Clothe implements IClothe {
    constructor(
        public shirt: string,
        public pants: string,
        public lower: string
    ) { }
}