import React from "react";
import { useState } from "react";
const baseURL = import.meta.env.VITE_BASE_URL;
const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const register = async (e) => {
    e.preventDefault();
    const response = await fetch(`${baseURL}/register`,{
      method:"POST",
      body: JSON.stringify({username, password}),
      headers:{"Content-Type":"application/json"},
    });
    if(response.status === 200){
      alert("Registration successfull !")
    }else {
      alert("Registration failed !")
    }
  };
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <label htmlFor="emal">Username</label>
      <input
        type="text"
        id="Username"
        name="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="fname">Password</label>
      <input
        type="text"
        id="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
