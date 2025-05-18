import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required.';
    if (!password) newErrors.password = 'Password is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setLoggedIn(true);
      setTimeout(() => navigate('/'), 1200);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          className="modal-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
        <input
          className="modal-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {errors.password && <span className="form-error">{errors.password}</span>}
        <button className="modal-btn" type="submit">Log In</button>
        <div className="auth-link">Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span></div>
        {loggedIn && <div className="form-success">Logged in! Redirecting...</div>}
      </form>
    </div>
  );
}

export default Login;
