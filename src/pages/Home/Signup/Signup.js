import React, { useState } from 'react';
import './Signup.css';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';


const provider = new GoogleAuthProvider();
const Signup = () => {
    const [showPass, setShowPass] = useState(false);
    const [showConPass, setShowConPass] = useState(false);
    const [email, setEmail] = useState({value:'', error:''});
    const [password, setPassword] = useState({value:'', error:''});
    const [confirmPassword, setConfirmPassword] = useState({value:'', error:''});
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
    const confirmPasswordInput = (confirmPasswordInput) => {
        if (confirmPasswordInput !== password) {
            setConfirmPassword({ value: confirmPasswordInput, error: "" });
          } else {
            setConfirmPassword({ value: "", error: "Password don't matched" });
          }
    }

    const halndleFormSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.ConfirmPassword.value;
        console.log(email, password, confirmPassword)

        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    console.log(error)
    // ..
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
        <div className='signup'>
            <form onSubmit={halndleFormSubmit} className="form">
                <h2>Register!!</h2>
                <div className='inputs'>
                    <input onBlur={(event) => emailInput(event.target.value)} className='input' type="email" name="email" placeholder='Email' id="" />
                    {email.error && <><p className='error-text'><HiOutlineExclamationCircle style={{fontSize:'17px', marginRight:'5px'}}></HiOutlineExclamationCircle>plase enter valid email</p></>}
                </div>
                <div className='inputs'>
                    <input onBlur={(event) => passwordInput(event.target.value)} className='input' type={showPass ? "text" : "password"} name="password" placeholder='Password' id="" />
                    <label onClick={() => setShowPass(!showPass)} className='label' htmlFor="password">{showPass ? <BsFillEyeSlashFill></BsFillEyeSlashFill> : <BsFillEyeFill></BsFillEyeFill>}</label>
                    {password.error && <><p className='error-text'><HiOutlineExclamationCircle style={{fontSize:'17px', marginRight:'5px'}}></HiOutlineExclamationCircle>{password.error}</p></>}
                </div>
                <div className='inputs'>
                    <input onBlur={(event) => confirmPasswordInput(event.target.value)} className='input' type={showConPass ? "text" : "password"} name="ConfirmPassword" placeholder='Confirm Password' id="" />
                    <label onClick={() => setShowConPass(!showConPass)} className='label' htmlFor="ConfirmPassword">{showConPass ? <BsFillEyeSlashFill></BsFillEyeSlashFill> : <BsFillEyeFill></BsFillEyeFill>}</label>
                    {confirmPassword.error && <><p className='error-text'><HiOutlineExclamationCircle style={{fontSize:'17px', marginRight:'5px'}}></HiOutlineExclamationCircle>{confirmPassword.error}</p></>}
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