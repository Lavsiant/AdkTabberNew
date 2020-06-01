export default interface IUser {
    userName: string;
    email: string;
    firstName?: string;
    lastName?: string;
    id?: number;
    password: string;
    role?: number;
}