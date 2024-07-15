import React, { useState } from 'react';
import './Registration.css'; 
import { Link, useNavigate } from 'react-router-dom';


const RegistrationComponent = () => {
  const navigate=useNavigate();
  const [formData,setFormData]=useState({
    username:'',
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
  const handleRegistration = async(event) => {
    event.preventDefault();
    try {
      console.log(formData,"This is formdata");
      const response=await fetch("http://localhost:5000/api/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      const data=await response.json();
      console.log(data,"Register successful");
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="container">
    
      <div className="registration-container">
        <h2>Register</h2>
        <form onSubmit={handleRegistration}>
          <label htmlFor="username">Name:</label>
          <input 
          type="text" 
          id="username" 
          name="username" 
          onChange={handleInputChange}
          required />

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

          <button type="submit">Register</button>
        </form>
        <div className="login-link">
         <p>Already have an account <span><Link to="/login" style={{color:"#f9004d"}}>login</Link></span></p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComponent;
