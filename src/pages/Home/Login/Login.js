import React, { useState } from 'react';
import './Login.css';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebase.init';

const provider = new GoogleAuthProvider();
const Login = () => {
     const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const halndleFormSubmit = event => {
        event.preventDefault();
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
        <div className='login'>
            <form onSubmit={halndleFormSubmit} className="form">
                <h2>Login!!</h2>
                <div className='inputs'>
                    <input className='input' type="email" name="email" placeholder='Email' id="" />
                </div>
                <div className='inputs'>
                    <input className='input' type={showPass ? 'text' : 'password'} name="password" placeholder='Password' id="" />
                    <label onClick={() => setShowPass(!showPass)} className='label' htmlFor="password">{showPass ? <BsFillEyeSlashFill></BsFillEyeSlashFill> : <BsFillEyeFill></BsFillEyeFill>}</label>
                </div>
                <div className='inputs'>
                    <p className='shadow'>forget password?</p>
                </div>
                <input className='email-login' type="submit" value="Login" />
                <p style={{margin:'10px 0'}}>don't have account? <span className='shadow' onClick={() => navigate('/signup')}> Create Account</span></p>
                <div className="options">
                    <div className="left-options"></div>
                    <p>or</p>
                    <div className="right-options"></div>
                </div>
                <button onClick={handleGoogleSignIn} className='google-signin'><FcGoogle style={{fontSize:'30px'}}></FcGoogle>Google Sign In</button>
            </form>
        </div>
    );
};

export default Login;