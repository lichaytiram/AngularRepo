import { ITutorial } from './Itutorial.model';

export class Tutorial implements ITutorial {

    constructor(
        public name: string,
        public url: string
    ) { }
}