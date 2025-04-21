import {useState} from 'react'
import {IoEyeOutline} from 'react-icons/io5'
import {IoEyeOffOutline} from 'react-icons/io5'

const signUpEmptyData = {
    signUpUsername: '',
    signUpPassword: '',
    signUpRepeatPassword: '',
    signUpTerms: false,
}

export default function SignUpForm() {
    const passwordMsg1 =
        'Password must be at least 10 characters long and include at least one uppercase letter, one lowercase letter, and one number.'
    const passwordMsg2 = 'Passwords must be identical'
    const usernameMsg1 =
        'Username must be at least 10 characters long and only include letters and numbers'
    const [signUpCredentials, setSignUpCredentials] = useState(signUpEmptyData)
    const [showSignUpPassword, setShowSignUpPassword] = useState(false)
    const [showRepeatSignUpPassword, setShowRepeatSignUpPassword] =
        useState(false)
    const [usernameErrorMsg, setUsernameErrorMsg] = useState('')
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(passwordMsg1)
    const [repeatPasswordErrorMsg, setRepeatPasswordErrorMsg] = useState('')
    const passwordRequirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/
    const usernameRequirements = /^[a-zA-Z0-9]{12,}$/

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'signUpUsername') {
            setUsernameErrorMsg(
                usernameRequirements.test(e.target.value)
                    ? ''
                    : usernameMsg1
            )
        }
        if (e.target.name === 'signUpPassword') {
            setRepeatPasswordErrorMsg(
                e.target.value === signUpCredentials.signUpRepeatPassword
                    ? ''
                    : passwordMsg2
            )
            setPasswordErrorMsg(
                passwordRequirements.test(e.target.value) ? '' : passwordMsg1
            )
        }
        if (e.target.name === 'signUpRepeatPassword') {
            setRepeatPasswordErrorMsg(
                e.target.value === signUpCredentials.signUpPassword
                    ? ''
                    : passwordMsg2
            )
        }
        setSignUpCredentials({
            ...signUpCredentials,
            [e.target.name]:
                e.target.type === 'checkbox'
                    ? e.target.checked
                    : e.target.value,
        })
    }
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault()
        // chequear validez de credenciales
        console.log(signUpCredentials)
    }

    return (
        <form className="flex flex-col items-center p-8 bg-white rounded-4xl shadow-lg">
            <div className="w-full p-3 mb-5 border-b-2 border-gray-400">
                <input
                    className="w-full outline-none"
                    type="text"
                    placeholder="username"
                    name="signUpUsername"
                    onChange={handleChange}
                />
            </div>
            <p>{usernameErrorMsg}</p>
            <div className="w-full p-3 mb-5 border-b-2 border-gray-400 flex items-center justify-between">
                <input
                    className="w-full outline-none"
                    type={showSignUpPassword ? 'text' : 'password'}
                    placeholder="password"
                    name="signUpPassword"
                    onChange={handleChange}
                />
                <button
                    className="cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault()
                        setShowSignUpPassword(!showSignUpPassword)
                    }}>
                    {showSignUpPassword ? (
                        <IoEyeOffOutline className="w-6 h-6 text-gray-600" />
                    ) : (
                        <IoEyeOutline className="w-6 h-6 text-gray-600" />
                    )}
                </button>
            </div>
            <p>{passwordErrorMsg}</p>
            <div className="w-full  p-3 mb-5 border-b-2 border-gray-400 flex items-center justify-between">
                <input
                    className="w-full outline-none"
                    type={showRepeatSignUpPassword ? 'text' : 'password'}
                    placeholder="repeat password"
                    name="signUpRepeatPassword"
                    onChange={handleChange}
                />
                <button
                    className="cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault()
                        setShowRepeatSignUpPassword(!showRepeatSignUpPassword)
                    }}>
                    {showRepeatSignUpPassword ? (
                        <IoEyeOffOutline className="w-6 h-6 text-gray-600" />
                    ) : (
                        <IoEyeOutline className="w-6 h-6 text-gray-600" />
                    )}
                </button>
            </div>
            <p>{repeatPasswordErrorMsg}</p>
            <div className="flex items-center justify-center">
                <input
                    type="checkbox"
                    name="signUpTerms"
                    onChange={handleChange}
                    checked={signUpCredentials.signUpTerms}
                    className="cursor-pointer"
                />
                <p className="ml-3 text-gray-700 my-5">
                    Accept Terms & Conditions
                </p>
            </div>
            <button
                className={`bg-indigo-600 text-gray-50 font-bold text-lg p-3 min-w-48 rounded-md my-5 shadow-lg cursor-pointer ${
                    !signUpCredentials.signUpTerms
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:scale-105'
                }`}
                onClick={handleClick}
                disabled={!signUpCredentials.signUpTerms}>
                Sign Up
            </button>
        </form>
    )
}
