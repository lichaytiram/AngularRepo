import { ISwimsuit } from "./ISwimsuit.model";

export class Protein implements ISwimsuit {
    constructor(
        public shirt: string,
        public pants: string,
        public lower: string,
    ) { }
}