import {useState} from 'react'
import SignUpForm from '../components/SignUpForm'
import LogInForm from '../components/LogInForm'
import Header from '../components/Header'

export default function Login() {
    const [signUpFormActive, setSignUpFormActive] = useState(false)

    return (
        <div className="p-3 w-full min-w-xs max-w-lg flex flex-col h-full">
            <Header />
            <div className="flex justify-around my-8">
                <button
                    className={`w-24 text-gray-50 font-bold text-2xl cursor-pointer ${
                        !signUpFormActive && 'border-b-2'
                    }`}
                    onClick={() => setSignUpFormActive(false)}>
                    Log In
                </button>
                <button
                    className={`w-24 text-gray-50 font-bold text-2xl cursor-pointer ${
                        signUpFormActive && 'border-b-2'
                    }`}
                    onClick={() => setSignUpFormActive(true)}>
                    Sign Up
                </button>
            </div>
            {signUpFormActive ? (
                // Sign Up Form
                <SignUpForm />
            ) : (
                // Log In Form
                <LogInForm />
            )}
        </div>
    )
}
