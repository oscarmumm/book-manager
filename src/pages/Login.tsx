import React, { useState } from 'react';
import { GiWhiteBook } from 'react-icons/gi';
import { IoEyeOutline } from 'react-icons/io5';

// MODULARIZAR ESTE CODIGO. DIVIDIRLO EN DOS COMPONENTES. LOGIN FORM Y SIGNUP FORM

const logInEmptyData = {
    logInUsername: '',
    logInPassword: '',
};

const signUpEmptyData = {
    signUpUsername: '',
    signUpPassword: '',
    signUpTerms: false,
};

export default function Login() {
    const passwordMsg1 =
        'Password must be at least 10 characters long and include at least one uppercase letter, one lowercase letter, and one number.';
    const passwordMsg2 = 'Correct Password';
    const [signUpFormActive, setSignUpFormActive] = useState(false);
    const [logInCredentials, setLogInCredentials] = useState(logInEmptyData);
    const [signUpCredentials, setSignUpCredentials] = useState(signUpEmptyData);
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(passwordMsg1);
    const [showSignUpPassword, setShowSignUpPassword] = useState(false);
    const [showRepeatSignUpPassword, setShowRepeatSignUpPassword] =
        useState(false);
    const passwordRequirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;

    const handleChangeLogIn = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogInCredentials({
            ...logInCredentials,
            [e.target.name]: e.target.value,
        });
    };
    const handleChangeSignUp = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'signUpPassword') {
            setPasswordErrorMsg(
                passwordRequirements.test(e.target.value)
                    ? passwordMsg2
                    : passwordMsg1
            );
        }
        setSignUpCredentials({
            ...signUpCredentials,
            [e.target.name]:
                e.target.type === 'checkbox'
                    ? e.target.checked
                    : e.target.value,
        });
    };

    const handleLogInClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        // chequear validez de credenciales
        console.log(logInCredentials);
    };
    const handleSignUpClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        // chequear validez de credenciales
        console.log(signUpCredentials);
    };

    return (
        <div className='w-full min-w-xs max-w-lg flex flex-col h-full'>
            <div className='flex items-center justify-center p-5'>
                <GiWhiteBook className='w-8 h-8 text-gray-50' />
                <h1 className='text-4xl text-gray-50 font-bold ml-3'>
                    Book Manager
                </h1>
            </div>
            <div className='flex justify-around my-8'>
                <button
                    className={`w-24 text-gray-50 font-bold text-2xl ${
                        !signUpFormActive && 'border-b-2'
                    }`}
                    onClick={() => setSignUpFormActive(false)}
                >
                    Log In
                </button>
                <button
                    className={`w-24 text-gray-50 font-bold text-2xl ${
                        signUpFormActive && 'border-b-2'
                    }`}
                    onClick={() => setSignUpFormActive(true)}
                >
                    Sign Up
                </button>
            </div>
            {signUpFormActive ? (
                // Sign Up Form
                // <form className='flex flex-col items-center p-8 bg-white rounded-tl-4xl rounded-tr-4xl h-full shadow-lg'>
                <form className='flex flex-col items-center p-8 bg-white rounded-4xl shadow-lg'>
                    <input
                        className='w-full outline-none p-3 mb-5 border-b-2 border-gray-400'
                        type='text'
                        placeholder='username'
                        name='signUpUsername'
                        onChange={handleChangeSignUp}
                    />
                    <div className='w-full p-3 mb-5 border-b-2 border-gray-400 flex items-center justify-between'>
                        <input
                            className='w-full outline-none'
                            type={showSignUpPassword ? 'text' : 'password'}
                            placeholder='password'
                            name='signUpPassword'
                            onChange={handleChangeSignUp}
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setShowSignUpPassword(!showSignUpPassword);
                            }}
                        >
                            <IoEyeOutline className='w-6 h-6 text-gray-600' />
                        </button>
                    </div>
                    <p>{passwordErrorMsg}</p>
                    <div className='w-full  p-3 mb-5 border-b-2 border-gray-400 flex items-center justify-between'>
                        <input
                            className='w-full outline-none'
                            type={
                                showRepeatSignUpPassword ? 'text' : 'password'
                            }
                            placeholder='repeat password'
                            name='signUpRepeatPassword'
                            onChange={handleChangeSignUp}
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setShowRepeatSignUpPassword(
                                    !showRepeatSignUpPassword
                                );
                            }}
                        >
                            <IoEyeOutline className='w-6 h-6 text-gray-600' />
                        </button>
                    </div>
                    <div className='flex items-center justify-center'>
                        <input
                            type='checkbox'
                            name='signUpTerms'
                            onChange={handleChangeSignUp}
                            checked={signUpCredentials.signUpTerms}
                        />
                        <p className='ml-3 text-gray-700 my-5'>
                            Accept Terms & Conditions
                        </p>
                    </div>
                    <button
                        className={`bg-indigo-600 text-gray-50 font-bold text-lg p-3 min-w-48 rounded-md my-5 shadow-lg ${
                            !signUpCredentials.signUpTerms
                                ? 'opacity-50 cursor-not-allowed'
                                : ''
                        }`}
                        onClick={handleSignUpClick}
                        disabled={!signUpCredentials.signUpTerms}
                    >
                        Sign Up
                    </button>
                </form>
            ) : (
                // Log In Form
                <form className='flex flex-col items-center p-8 bg-white rounded-4xl shadow-lg'>
                    <input
                        className='w-full outline-none p-3 mb-5 border-b-2 border-gray-400'
                        type='text'
                        placeholder='username'
                        name='logInUsername'
                        onChange={handleChangeLogIn}
                    />
                    <input
                        className='w-full outline-none p-3 mb-5 border-b-2 border-gray-400'
                        type='password'
                        placeholder='password'
                        name='logInPassword'
                        onChange={handleChangeLogIn}
                    />
                    <button
                        className='bg-indigo-600 text-gray-50 font-bold text-lg p-3 min-w-48 rounded-md my-5 shadow-lg hover:scale-110'
                        onClick={handleLogInClick}
                    >
                        Log In
                    </button>
                </form>
            )}
        </div>
    );
}
