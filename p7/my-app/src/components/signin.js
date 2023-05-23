import React, { useState } from 'react'
import {auth,provider} from "./config"

import { signInWithPopup } from 'firebase/auth'
import { useEffect } from 'react'
import Login from './Login'
const Signin = () => {
    const [value,setValue]=useState("")
    const handleClick=()=>{
        signInWithPopup(auth,provider).then((data)=>{
           setValue(data.user.email)
           localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem("email"))
    })
  return (
    <div>
        {value?<Login></Login>:
        <button onClick={handleClick}>Sign in with Google</button>
  }
    </div>
  )
}

export default Signin