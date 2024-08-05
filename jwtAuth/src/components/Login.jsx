import React, { useState } from 'react'
import Axios from 'axios'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import './Login'
import './ForgetPassword'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    
    Axios.defaults.withCredentials = true;
    const handleSubmit = (e) =>{
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/login', {email, password})
        .then(response => {
            if(response.data.status){
                navigate('/')
            }
        }).catch(err =>{
            console.log(err)
        })
    }

  return (
    <div className="container">
    <h2>Login</h2>
    <form id="signuphtmlForm" onSubmit={handleSubmit}>
        <div className="htmlForm-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required onChange={(e) =>setEmail(e.target.value)}  />
        </div>
        <div className="htmlForm-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required onChange={(e) =>setPassword(e.target.value)} />
        </div>
        
        <button type="submit">Login</button>
        <Link to='/forgetPassword'>Forget Password?</Link>
        <p>Don't have an Account? <Link to='/signup'>Signup</Link></p> 
    </form>
    
</div>
  )
}
