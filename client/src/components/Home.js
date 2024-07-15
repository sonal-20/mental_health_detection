import React from 'react';

import './Home.css'; // Make sure to create an App.css file for your styles

const Home= () => {
  return (
    <div className="containe">
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
      <div className="content">

        <h2>Student Mental Health<br />Detection System</h2>
        <p>We will help you to detect your mental health <b></b><br /></p>
      </div>
      <div className="link">
        {/* <a href="#" className="hire">Hire Me</a> */}
      </div>
    </div>
  );
};

export default Home;
