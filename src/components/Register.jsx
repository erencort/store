import React, { useState } from 'react'
import { register } from '../firebase'
import { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";



function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const submitHandle = async (e) => {
        e.preventDefault()
        const user = await register(email, password)
        console.log(user)
        user && navigate("/")
    }

  return (
    <div>
    <Toaster  position="top-right"/>

        <form onSubmit={submitHandle}>
            <input type="email" placeholder='E-mail' onChange={(e) => (setEmail(e.target.value))} /> <br />
            <input type="password" placeholder='Password' onChange={(e) => (setPassword(e.target.value))} /> <br />
            <button type='submit'>Register</button>
        </form>
        <Link to={"/login"}>Have an account</Link>

    </div>
  )
}

export default Register