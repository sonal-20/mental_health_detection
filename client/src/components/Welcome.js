import React from 'react';
import { Link } from 'react-router-dom';
import welcome from './Welcome1.png';
// import './Welcome.css'; // Make sure to create a WelcomeComponent.css file for your styles

const WelcomeComponent = () => {
  return (
    <form action="questions.html">
      <div className="container">
        {/* <nav>
          <div className="logo">
            <a href="#">Student Mental Health<span>Detection</span></a>
          </div>
          <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="buttons">
            <a href="login3.html" className="login">Log in</a>
            <a href="registration.html" className="btn">Register</a>
          </div>
        </nav> */}
        
        <div className="welcome-content">
          <h2>Welcome to Our System</h2>
          <p></p>
        </div>
        <div>
        <Link to="/Questions">
<button className="start-button">Start Detecting</button>
</Link>
        </div>
        
      </div>
    </form>
  );
};

export default WelcomeComponent;
