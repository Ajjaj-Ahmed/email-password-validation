import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { Link } from 'react-router-dom';

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password)
        setSuccess(false)
        setErrorMessage('')

        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            if(!result.user.emailVerified){
                setErrorMessage('Email Varified first');
                return
            }
            console.log(result.user)
            setSuccess(true)})
        .catch(error=>setErrorMessage(error.message))
    }

    return (
        <div>
            <div className='max-w-lg mx-auto text-center'>
                <h2 className='text-4xl my-8'>Login</h2>
                <form onSubmit={handleLogin}>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="email" name='email' className="grow" placeholder="Email" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 my-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type='password' placeholder='Password' name='password' className="grow" />

                    </label>

                    <button className='btn btn-primary btn-wide'>Submit</button>
                </form>
                {
                    success && <p className='text-green-500 my-4'>'User Login successfulll'</p>
                }
                {
                    errorMessage && <p className='text-red-600 my-4'>{errorMessage}</p>
                }
                <p className='my-6 '>Don't you any account !! <Link to={'/register'}>Sign Up </Link></p>

            </div>
        </div>
    );
};

export default Login;