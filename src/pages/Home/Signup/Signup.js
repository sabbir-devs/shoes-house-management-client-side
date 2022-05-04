import React, { useState } from 'react';
import './Signup.css';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';


const provider = new GoogleAuthProvider();
const Signup = () => {
    const [showPass, setShowPass] = useState(false)
    const [showConPass, setShowConPass] = useState(false)
    const navigate = useNavigate()
    

    const halndleFormSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.ConfirmPassword.value;
        console.log(email, password, confirmPassword)
    }
    const handleGoogleSignIn = () => {
        console.log('clicked')
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className='signup'>
            <form onSubmit={halndleFormSubmit} className="form">
                <h2>Register!!</h2>
                <div className='inputs'>
                    <input className='input' type="email" name="email" placeholder='Email' id="" />
                </div>
                <div className='inputs'>
                    <input className='input' type={showPass ? "text" : "password"} name="password" placeholder='Password' id="" />
                    <label onClick={() => setShowPass(!showPass)} className='label' htmlFor="password">{showPass ? <BsFillEyeSlashFill></BsFillEyeSlashFill> : <BsFillEyeFill></BsFillEyeFill>}</label>
                </div>
                <div className='inputs'>
                    <input className='input' type={showConPass ? "text" : "password"} name="ConfirmPassword" placeholder='Confirm Password' id="" />
                    <label onClick={() => setShowConPass(!showConPass)} className='label' htmlFor="ConfirmPassword">{showConPass ? <BsFillEyeSlashFill></BsFillEyeSlashFill> : <BsFillEyeFill></BsFillEyeFill>}</label>
                </div>
                <div className='inputs'>
                    <p className='shadow'>forget password?</p>
                </div>
                <input className='email-login' type="submit" value="Login" />
                <p style={{margin:'10px 0'}}>Alrady have an<span className='shadow' onClick={() => navigate('/login')}> Login?</span></p>
                <div className="options">
                    <div className="left-options"></div>
                    <p>or</p>
                    <div className="right-options"></div>
                </div>
                <button onClick={() => handleGoogleSignIn()} className='google-signin'><FcGoogle style={{fontSize:'30px'}}></FcGoogle>Google Sign In</button>
            </form>
        </div>
    );
};

export default Signup;