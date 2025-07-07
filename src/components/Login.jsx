import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, sans-serif',
      background: 'var(--primary-bg)',
    }}>
      <div className="login-box" style={{
        display: 'flex',
        flexDirection: 'row',
        background: 'var(--card-bg)',
        borderRadius: 'var(--border-radius)',
        boxShadow: 'var(--shadow)',
        minWidth: 420,
        maxWidth: 440,
        minHeight: 420,
        overflow: 'hidden',
        position: 'relative',
        border: '1.5px solid var(--card-border)',
      }}>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 36px',
          position: 'relative',
        }}>
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '2rem', marginBottom: 8, textAlign: 'center', letterSpacing: 1 }}>Log In</h2>
          <p style={{ color: 'var(--muted-text)', fontSize: '1.05rem', marginBottom: 24, textAlign: 'center' }}>Enter your credentials to access your account</p>
          <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div className="form-group" style={{ width: '100%' }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--input-text)', border: '1.5px solid var(--input-border)', borderRadius: 'var(--border-radius)', fontSize: '1.08rem', marginBottom: 0 }}
                required
              />
            </div>
            <div className="form-group" style={{ width: '100%' }}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--input-text)', border: '1.5px solid var(--input-border)', borderRadius: 'var(--border-radius)', fontSize: '1.08rem', marginBottom: 0 }}
                required
              />
            </div>
            {error && <div className="error-message" style={{ color: '#ff6a00', marginBottom: -8, textAlign: 'center', fontWeight: 500 }}>{error}</div>}
            <button type="submit" disabled={loading} style={{
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
            }}>
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
          <div style={{ textAlign: 'center', color: 'var(--muted-text)', fontSize: '1rem', marginTop: 18 }}>
            Don't have an account?{' '}
            <span style={{ color: 'var(--accent)', cursor: 'pointer', fontWeight: 600 }} onClick={() => navigate('/signup')}>Sign up</span>
          </div>
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: '#bfc9da', fontSize: 20, position: 'absolute', right: 24, top: 18, cursor: 'pointer', transition: 'color 0.2s' }} aria-label="Close">×</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
