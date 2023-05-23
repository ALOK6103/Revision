import React from 'react'
import style from "./Login.module.css"
import logo from "./dummy1.jpg"
const Login = () => {
  return (
    <div id={style.container} >
        <div id={style.left} >
            <p id={style.sign}>Sign In</p>
            <p>If u don't have account register</p>
            <p>You can <span>Register here !</span></p>
            <form>
                <label>Enter your Username or Email address</label>
                <br></br>
                <input type='text' placeholder='Username or Email address'  />
                <br></br>
                
                <label id={style.pass}>Enter your Password</label>
                <br></br>
                <input type='text' placeholder='Enter Password'  />
            </form>
        </div>
        <div id={style.right}>
            <img  src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default Login