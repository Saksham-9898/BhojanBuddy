import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMsg, setResetMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }
    setError('');
    setTimeout(() => navigate('/'), 1000);
  };

  const handleReset = (e) => {
    e.preventDefault();
    if (!resetEmail) {
      setResetMsg('Please enter your email.');
      return;
    }
    setResetMsg('If this email is registered, a reset link will be sent.');
    setTimeout(() => {
      setShowReset(false);
      setResetEmail('');
      setResetMsg('');
    }, 2500);
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
          {!showReset ? (
            <>
              <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '2rem', marginBottom: 8, textAlign: 'center', letterSpacing: 1 }}>Log In</h2>
              <p style={{ color: 'var(--muted-text)', fontSize: '1.05rem', marginBottom: 24, textAlign: 'center' }}>Enter your credentials to access your account</p>
              <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--input-text)', border: '1.5px solid var(--input-border)', borderRadius: 'var(--border-radius)', fontSize: '1.08rem', marginBottom: 0 }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--input-text)', border: '1.5px solid var(--input-border)', borderRadius: 'var(--border-radius)', fontSize: '1.08rem', marginBottom: 0 }}
                />
                <div style={{ textAlign: 'right', marginTop: -10, marginBottom: -8 }}>
                  <span style={{ color: 'var(--accent)', cursor: 'pointer', fontSize: '0.98rem', fontWeight: 500 }} onClick={() => setShowReset(true)}>
                    Forgot password?
                  </span>
                </div>
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
                >Log In</button>
              </form>
              <div style={{ textAlign: 'center', color: 'var(--muted-text)', fontSize: '1rem', marginTop: 18 }}>
                Don't have an account?{' '}
                <span style={{ color: 'var(--accent)', cursor: 'pointer', fontWeight: 600 }} onClick={() => navigate('/signup')}>Sign up</span>
              </div>
            </>
          ) : (
            <>
              <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '2rem', marginBottom: 8, textAlign: 'center', letterSpacing: 1 }}>Reset Password</h2>
              <p style={{ color: 'var(--muted-text)', fontSize: '1.05rem', marginBottom: 24, textAlign: 'center' }}>Enter your email to receive a reset link</p>
              <form onSubmit={handleReset} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={resetEmail}
                  onChange={e => setResetEmail(e.target.value)}
                  style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--input-text)', border: '1.5px solid var(--input-border)', borderRadius: 'var(--border-radius)', fontSize: '1.08rem', marginBottom: 0 }}
                />
                {resetMsg && <div style={{ color: '#ff6a00', marginBottom: -8, textAlign: 'center', fontWeight: 500 }}>{resetMsg}</div>}
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
                >Send Reset Link</button>
              </form>
              <div style={{ textAlign: 'center', color: 'var(--muted-text)', fontSize: '1rem', marginTop: 18 }}>
                <span style={{ color: 'var(--accent)', cursor: 'pointer', fontWeight: 600 }} onClick={() => setShowReset(false)}>Back to Login</span>
              </div>
            </>
          )}
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: '#bfc9da', fontSize: 20, position: 'absolute', right: 24, top: 18, cursor: 'pointer', transition: 'color 0.2s' }} aria-label="Close">×</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
