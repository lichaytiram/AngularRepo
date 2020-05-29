export interface IUser {
    username: string,
    password: string,
    confirmPassword: string,
    gender: string,
    weight: number,
    id?:string;
}