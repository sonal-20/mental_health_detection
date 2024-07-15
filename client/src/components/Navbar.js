import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    // <Fragment>
    //   <div className="fragment-container"> {/* Add a container with the CSS class */}
    //     <Link to="/">Home</Link>
    //     <Link to="/login">Login</Link>
    //     <Link to="/register">Register</Link>
    //     <Link to="/welcome">Welcome</Link>
    //     <Link to="/questions">Questions</Link>
    //   </div>
    // </Fragment>
    <Fragment>
    <div class="nav-bar">
    <nav>
      <div class="logo">
        <a href="#">Student Mental Health<span>Detection</span></a>
      </div>
      <ul>
       <li> <Link to="/Home">Home</Link></li>
       <li> <Link to="/About">About</Link></li>
       <li> <Link to="/Services">Services</Link></li>
      </ul>
      <div class="buttons">
                   <Link class="link" to="/login">Login</Link>
                   <Link class="link" to="/register">Register</Link>
    
      </div>
    </nav>
  </div>
  </Fragment>
  );
};

export default Navbar;
