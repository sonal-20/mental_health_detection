import React from 'react';
import './Services.css'; // Make sure to import your CSS file

const ServicesPage = () => {
  return (
    <div className="container6">
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
      <div className="services-content">
        <h2> Services</h2>
        <h4>Mental Health Assessment</h4>
        <p>Our Student Mental Health Detection System offers a comprehensive and user-friendly mental health assessment designed to empower students in understanding and managing their mental well-being. </p>

        <h4>Early Detection</h4>
        <p>Detect early signs of stress, anxiety, depression, or other mental health issues, enabling users to take proactive measures.</p>
        <h4>Privacy and Security Measures</h4>
        <p>At [Your System's Name], we prioritize the privacy and security of your personal information. We are committed to maintaining the utmost confidentiality and ensuring a secure environment for all users.</p>
        <h4>Ease of Use</h4>
        <p>Navigating and utilizing our Student Mental Health Detection System is designed to be intuitive and straightforward, prioritizing a seamless user experience for everyone.

</p>
      </div>
      <div className="link">
        {/* <a href="#" className="hire">Hire Us</a> */}
      </div>
    </div>
  );
};

export default ServicesPage;
