import { User } from "../types"

export const UsersDB: User[] = [
        {
                id_user: 1,
                name: 'admin',
                surname: '',
                email: 'admin@gmail.com',
                phone: '',
                username: 'admin',
                password: 'admin',
                role: 'admin'
        },
        {
                id_user: 2,
                name: 'jose',
                surname: 'perez',
                email: 'joseperez@gmail.com',
                phone: '112233445',
                username: 'josep',
                password: '12345',
                role: 'user'
        },
]