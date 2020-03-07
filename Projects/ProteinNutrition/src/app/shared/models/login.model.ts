import { ILogin } from './iLogin.model';

export class Login implements ILogin {
    constructor(
        public username: string,
        public password: string,
        public confirmPassword: string,
    ) { }
}