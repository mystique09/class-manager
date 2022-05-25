export interface User {
    uid: string;
    username: string;
    password: string;
    email: string;
}

export interface NewUser {
    username: string;
    password: string;
    email: string;
}