import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    setTimeout(() => navigate('/login'), 1000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, sans-serif',
      background: 'var(--primary-bg)',
    }}>
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        background: 'var(--card-bg)',
        borderRadius: 'var(--border-radius)',
        boxShadow: 'var(--shadow)',
        minWidth: 420,
        maxWidth: 440,
        minHeight: 420,
        overflow: 'hidden',
        border: '1.5px solid var(--card-border)',
      }}>
        {/* Close button absolutely positioned above the card */}
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: '#bfc9da', fontSize: 28, position: 'absolute', right: 8, top: -38, cursor: 'pointer', transition: 'color 0.2s', zIndex: 2, padding: 0, lineHeight: 1 }} aria-label="Close">×</button>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 36px',
          position: 'relative',
        }}>
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '2rem', marginBottom: 8, textAlign: 'center', letterSpacing: 1 }}>Create an Account</h2>
          <p style={{ color: 'var(--muted-text)', fontSize: '1.05rem', marginBottom: 24, textAlign: 'center' }}>Enter your details to create a new account</p>
          <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--input-text)', border: '1.5px solid var(--input-border)', borderRadius: 'var(--border-radius)', fontSize: '1.08rem', marginBottom: 0 }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--input-text)', border: '1.5px solid var(--input-border)', borderRadius: 'var(--border-radius)', fontSize: '1.08rem', marginBottom: 0 }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--input-text)', border: '1.5px solid var(--input-border)', borderRadius: 'var(--border-radius)', fontSize: '1.08rem', marginBottom: 0 }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--input-text)', border: '1.5px solid var(--input-border)', borderRadius: 'var(--border-radius)', fontSize: '1.08rem', marginBottom: 0 }}
            />
            {error && <div style={{ color: '#ff6a00', marginBottom: -8, textAlign: 'center', fontWeight: 500 }}>{error}</div>}
            <button type="submit" style={{
              width: '100%',
              background: 'var(--button-bg)',
              color: 'var(--button-text)',
              border: 'none',
              borderRadius: 'var(--border-radius)',
              padding: '14px',
              fontWeight: 700,
              fontSize: '1.15rem',
              cursor: 'pointer',
              marginTop: 8,
              boxShadow: '0 2px 8px #ff800022',
              letterSpacing: 1,
              transition: 'background 0.2s, transform 0.15s',
            }}
            >Sign Up</button>
          </form>
          <div style={{ textAlign: 'center', color: 'var(--muted-text)', fontSize: '1rem', marginTop: 18 }}>
            Already have an account?{' '}
            <span style={{ color: 'var(--accent)', cursor: 'pointer', fontWeight: 600 }} onClick={() => navigate('/login')}>Log in</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
