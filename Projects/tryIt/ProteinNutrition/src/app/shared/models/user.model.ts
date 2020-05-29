import { IUser } from './iUser.model';

export class User implements IUser {
    constructor(
        public username: string,
        public password: string,
        public confirmPassword: string,
        public gender: string,
        public weight: number,
        public id?: string
    ) { }
}