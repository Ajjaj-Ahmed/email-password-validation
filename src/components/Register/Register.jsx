import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [eye, setEye] = useState(false)

    const handleEyeButton = (value) => {
        setEye(value);
    }

    const emailRef = useRef()
    
    const handleRegister = (event) => {

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.fullName.value;
        const photo = event.target.photo.value;
        const terms = event.target.terms.checked;


        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;


        setErrorMessage('');
        setSuccess(false)

        // if (!passwordRegex.test(password)) {
        //     setErrorMessage('Password should have one upper ,one lower and one speical character')
        //     return
        // }

        if(!terms){
            setErrorMessage('Check the conditon');
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result =>{
                setSuccess(true);
                // update profile
                updateProfile(auth.currentUser,{
                    displayName: name, photoURL:photo
                })
                .then(result=>console.log('profile updated'))
                .catch(error=>console.log(error.message))
                // email varification
                sendEmailVerification(auth.currentUser)
                .then()
               
            })
            .catch(error => setErrorMessage(error.message))


    }

    const handleForgetPass=()=>{
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
        .then()
        .catch(error=>console.log(error.message))
    }

    return (
        <div className='max-w-lg mx-auto text-center'>
            <h2 className='text-4xl my-8'>Register</h2>
            <form onSubmit={handleRegister}>
                <label className="input input-bordered flex items-center my-6 gap-2">
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
                    <input type="text" name='fullName'  className="grow" placeholder="Full Name" />
                </label>
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
                    <input type="email" name='email' ref={emailRef} className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center my-6 gap-2">
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
                    <input type="url" name='photo'  className="grow" placeholder="Photo URL" />
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
                    <input type={eye ? 'text' : 'password'} placeholder='Password'  name='password' className="grow" />
                    <button onClick={() => handleEyeButton(!eye)}>
                        {eye ? <FaEyeSlash /> : <FaRegEye />}
                    </button>
                </label>

               <div className='cursor-pointer' onClick={handleForgetPass}>
                <p>Forget Password !</p>
               </div>

                {/* check box */}
                <div className='text-center my-4'>
                    <label className="cursor-pointer justify-start gap-2 label">
                        <input type="checkbox" name='terms' className="checkbox checkbox-secondary" />
                        <span className="label-text">Accept the terms and condition</span>
                    </label>
                </div>

                <button className='btn btn-primary btn-wide'>Submit</button>
            </form>
            {
                errorMessage && <p className='text-red-400 pt-3'>{errorMessage}</p>
            }
            {
                success && <p className='text-green-500 pt-3'>Sign in successfully</p>
            }
        </div>
    );
};

export default Register;