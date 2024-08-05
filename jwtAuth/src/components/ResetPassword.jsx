import React, { useState } from "react";
import Axios from "axios";
import "../App.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import './Login'

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const {token} = useParams();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/reset-password/"+token, {password})
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
        }
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <h2>Reset Password</h2>
      <form id="signuphtmlForm" onSubmit={handleSubmit}>
        <div className="htmlForm-group">
          <label htmlFor="password">New Password;</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Reset</button>
      </form>
    </div>
  );
}
