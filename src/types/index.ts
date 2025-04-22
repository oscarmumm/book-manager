export type User = {
    id_user: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    role: 'admin' | 'user';
};
