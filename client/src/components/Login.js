import React, { useState } from 'react';
import './Login.css'; // Make sure to create a LoginComponent.css file for your styles
import { Link, useNavigate } from 'react-router-dom';


const LoginComponent = () => {
  const navigate=useNavigate();
  const [formData,setFormData]=useState({
    email:'',
    password:''
  })

  const handleInputChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  const handleLogin = async(event) => {
    event.preventDefault();
    try {
      console.log(formData,"This is formdata");
      const response=await fetch("http://localhost:5000/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      const data=await response.json();
      const token=data.token;
      localStorage.setItem("userToken",JSON.stringify(token));
      console.log(data,"Login successful");
      navigate("/welcome")
    } catch (error) {
      console.log(error)
    }
  };
  

  return (
    <div className="container">
   
     
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          onChange={handleInputChange}
          required />
          
          <label htmlFor="password">Password:</label>
          <input 
          type="password" 
          id="password" 
          name="password" 
          onChange={handleInputChange}
          required />

          <button type="submit">Login</button>
        </form>
        {/* <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div> */}
        <div className="create-account">
          <p>Don't have an account <span><Link to="/register" style={{color:"#f9004d"}}>register</Link></span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
