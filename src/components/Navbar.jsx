import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const handleSignupClick = () => setShowSignup(true);
  const closeModal = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

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
          <button className="signin-btn" onClick={handleLoginClick}>Log In</button>
          <button className="signup-btn" onClick={handleSignupClick}>Sign Up</button>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Login</h2>
            <input type="text" placeholder="Username" className="modal-input" />
            <input type="password" placeholder="Password" className="modal-input" />
            <button className="modal-btn">Log In</button>
            <button className="modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      {/* Signup Modal */}
      {showSignup && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" className="modal-input" />
            <input type="email" placeholder="Email" className="modal-input" />
            <input type="password" placeholder="Password" className="modal-input" />
            <button className="modal-btn">Sign Up</button>
            <button className="modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
