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

export type Book = {
    id_book: number;
    title: string;
    author: string;
    category: string;
    total_copies: number;
    available_copies: number;
};

export type Category = {
    id_category: number;
    name: string;
};

export type Loans = {
    id_loan: number;
    id_user: number;
    id_book: number;
    loan_date: string;
    return_date: string;
    returned: boolean;
};
