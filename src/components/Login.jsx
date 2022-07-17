import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { signIn } from '../firebase'
import { useDispatch } from 'react-redux/es/exports';
import { login as loginHandle } from '../redux/authSlice';


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submitHandle = async (e) => {
        e.preventDefault()
        const user = await signIn(email, password)
        console.log(user)
        if(user){
            dispatch(loginHandle(user))
            navigate("/")
        }


    }

  return (
    <div>
    <Toaster  position="top-right"/>

        <form onSubmit={submitHandle}>
            <input type="email" placeholder='E-mail' onChange={(e) => (setEmail(e.target.value))} /> <br />
            <input type="password" placeholder='Password' onChange={(e) => (setPassword(e.target.value))} /> <br />
            <button type='submit'>Login</button>
        </form>
        <Link to={"/register"}>Create an account</Link>
    </div>
  )
}

export default Login