import { IRegister } from './iRegister.model';

export class Register implements IRegister {
    constructor(
        public username: string,
        public password: string,
        public confirmPassword: string,
        public gender: string,
        public weight: string,
        public id?: string
    ) { }
}