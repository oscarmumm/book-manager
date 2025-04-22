import { useState, useContext } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { IoEyeOffOutline } from 'react-icons/io5';
import { UsersDB } from '../db/UsersDB';
import { UserContext } from '../contexts/UserContext';

const logInEmptyData = {
    logInUsername: '',
    logInPassword: '',
};

export default function LogInForm() {
    const userContext = useContext(UserContext);
    if (!userContext) return null;
    const { logIn } = userContext;
    const [logInCredentials, setLogInCredentials] = useState(logInEmptyData);
    const [showLogInPassword, setShowLogInPassword] = useState(false);
    const [logInErrorMsg, setLogInErrorMsg] = useState<string>();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogInCredentials({
            ...logInCredentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        // chequear validez de credenciales
        authUser();
    };

    const authUser = () => {
        const userFound = UsersDB.find(
            (user) => user.username === logInCredentials.logInUsername
        );
        console.log(userFound);
        if (userFound?.password === logInCredentials.logInPassword) {
            logIn({username: userFound.username, role: userFound.role});
        } else {
            setLogInErrorMsg('Las credenciales ingresadas son incorrectas');
        }
    };

    return (
        <form className='flex flex-col items-center p-8 bg-white rounded-4xl shadow-lg'>
            <input
                className='w-full outline-none p-3 mb-5 border-b-2 border-gray-400'
                type='text'
                placeholder='username'
                name='logInUsername'
                onChange={handleChange}
            />
            <div className='w-full  p-3 mb-5 border-b-2 border-gray-400 flex items-center justify-between'>
                <input
                    className='w-full outline-none'
                    type={showLogInPassword ? 'text' : 'password'}
                    placeholder='password'
                    name='logInPassword'
                    onChange={handleChange}
                />
                <button
                    className='cursor-pointer'
                    onClick={(e) => {
                        e.preventDefault();
                        setShowLogInPassword(!showLogInPassword);
                    }}
                >
                    {showLogInPassword ? (
                        <IoEyeOffOutline className='w-6 h-6 text-gray-600' />
                    ) : (
                        <IoEyeOutline className='w-6 h-6 text-gray-600' />
                    )}
                </button>
            </div>
            <p className='text-red-700'>{logInErrorMsg}</p>
            <button
                className='bg-indigo-600 text-gray-50 font-bold text-lg p-3 min-w-48 rounded-md my-5 shadow-lg cursor-pointer hover:scale-105'
                onClick={handleClick}
            >
                Log In
            </button>
        </form>
    );
}
