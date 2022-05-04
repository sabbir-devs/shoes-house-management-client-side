import React, { useState } from 'react';
import './Login.css';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebase.init';

const provider = new GoogleAuthProvider();
const Login = () => {
     const [showPass, setShowPass] = useState(false);
     const [email, setEmail] = useState({value:'', error:''});
     const [password, setPassword] = useState({value:'', error:''})
    const navigate = useNavigate()

    const emailInput = (emailInput) => {
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" });     
        } else {
            setEmail({ value: "", error: "Please Enter Valid Email" }); 
        }

    }
    const passwordInput = (passwordInput) => {
        if (passwordInput.length < 6) {
            setPassword({ value: "", error: "Password Minimum of 6 Characters" });
        } else {
            setPassword({ value: passwordInput, error: "" });
        }
    }

    const halndleFormSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        console.log(error)
    });
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
                    <input onBlur={(event) => emailInput(event.target.value)} className='input' type="email" name="email" placeholder='Email' id="" />
                    {email.error && <><p className='error-text'><HiOutlineExclamationCircle style={{fontSize:'17px', marginRight:'5px'}}></HiOutlineExclamationCircle>plase enter valid email</p></>}
                </div>
                <div className='inputs'>
                    <input onBlur={(event) => passwordInput(event.target.value)} className='input' type={showPass ? 'text' : 'password'} name="password" placeholder='Password' id="" />
                    <label onClick={() => setShowPass(!showPass)} className='label' htmlFor="password">{showPass ? <BsFillEyeSlashFill></BsFillEyeSlashFill> : <BsFillEyeFill></BsFillEyeFill>}</label>
                    {password.error && <><p className='error-text'><HiOutlineExclamationCircle style={{fontSize:'17px', marginRight:'5px'}}></HiOutlineExclamationCircle>Password Minimum of 6 Characters</p></>}
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