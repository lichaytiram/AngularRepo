import { IProduct } from "./IProduct.model";

export class Product implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public creationDate: number,
        public thumbnailUrl: string,
        public url: string,
        public description?: string
    ) { }
}