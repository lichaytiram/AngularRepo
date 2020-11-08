import { IUser } from './IUser.model';

export class User implements IUser {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string
    ) { }
}