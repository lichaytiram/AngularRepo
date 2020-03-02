import { IEgg } from './iEgg.model';

export class Egg implements IEgg {
    constructor(
        public amount?: number,
        public sizeEgg?: string
    ) { }
}