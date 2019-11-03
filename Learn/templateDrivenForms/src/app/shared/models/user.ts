import { Address } from './address';

export class User {
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public address: Address,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean
    ) { }
}
