import React from 'react'
import './Register.css'

const Register = () => {
    return (
        <div className="register">
            <div className="loginwrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social App</h3>
                    <span className="loginDesc">Connect with your friends and the world around you on Social.{""}</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                      <input placeholder="Usename" className="loginInput" />
                      <input placeholder="Email" className="loginInput" />
                      <input placeholder="Password" className="loginInput" />
                      <input placeholder="Password Again" className="loginInput" />
                         <button className="loginButton">Sign Up</button>
                         <button className="loginRegisterButton">
                         Log into Account</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Register
