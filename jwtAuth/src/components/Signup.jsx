import React, { useState } from 'react'
import Axios from 'axios'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import './Login'

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/signup', {username, email, password})
        .then(response => {
            if(response.data.status){
                navigate('/login')
            }
        }).catch(err =>{
            console.log(err)
        })
    }

  return (
    <div className="container">
    <h2>Signup</h2>
    <form id="signuphtmlForm" onSubmit={handleSubmit}>
        <div className="htmlForm-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required onChange={(e) =>setUsername(e.target.value)} />
        </div>
        <div className="htmlForm-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required onChange={(e) =>setEmail(e.target.value)}  />
        </div>
        <div className="htmlForm-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required onChange={(e) =>setPassword(e.target.value)} />
        </div>
        
        <button type="submit">Signup</button>
        <p>Have an Account? <Link to='/login'>Login</Link></p> 
    </form>
    
</div>
  )
}
