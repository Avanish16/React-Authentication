import React, { useState } from 'react'
import Axios from 'axios'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import './Login'
export default function ForgetPassword() {
    const [email, setEmail] = useState('');

    const navigate = useNavigate()
    

    const handleSubmit = (e) =>{
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/forget-password', {email})
        .then(response => {
            if(response.data.status){
                alert("check you email for reset password link");
                navigate('/login');
            }
            
        }).catch(err =>{
            console.log(err)
        })
    }

  return (
    <div className="container">
    <h2>Forget Password</h2>
    <form id="signuphtmlForm" onSubmit={handleSubmit}>
        <div className="htmlForm-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required onChange={(e) =>setEmail(e.target.value)}  />
        </div>
        
        <button type="submit">Send</button>
    </form>
    
</div>
  )
}
