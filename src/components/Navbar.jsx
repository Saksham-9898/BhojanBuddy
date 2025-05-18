import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
      <div className="logo">
        <Link to="/" className="logo-link">Bhojan Buddy</Link>
      </div>

        <ul className="nav-links">
        <li><Link to='/'>Home</Link></li>  
        <li><Link to="#">Explore</Link></li>
        <li><Link to='/About'>About Us</Link></li>  
        <li><Link to='/Contact'>Contact</Link></li> 
        </ul>

        <input
        type="text"
        className="search-bar"
        placeholder="Search Restaurants..."/>

        
        <div className="nav-buttons">
          <Link to="/login" className="signin-btn">Log In</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
