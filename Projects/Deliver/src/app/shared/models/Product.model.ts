import { IProduct } from "./IProduct.model";

export class Product implements IProduct {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public date: Date,
        public thumbnailUrl: string,
        public url: string,
        public description?: string
    ) { }
}