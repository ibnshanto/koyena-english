import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const [mode, setMode] = useState('login') // 'login' or 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [busy, setBusy] = useState(false)
  const { signInWithEmail, signUpWithEmail } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setMessage('')
    setBusy(true)

    if (mode === 'signup') {
      const cleanUsername = username.trim()
      if (cleanUsername.length < 3) {
        setError('Username must be at least 3 characters.')
        setBusy(false)
        return
      }
      if (!/^[a-zA-Z0-9_]+$/.test(cleanUsername)) {
        setError('Username can only contain letters, numbers, and underscores.')
        setBusy(false)
        return
      }

      const { error } = await signUpWithEmail(email, password, cleanUsername)
      setBusy(false)
      if (error) {
        setError(error.message)
      } else {
        setMessage('Account created! You can log in now.')
        setMode('login')
      }
    } else {
      const { error } = await signInWithEmail(email, password)
      setBusy(false)
      if (error) {
        setError(error.message)
      } else {
        navigate('/')
      }
    }
  }

  return (
    <div className="page" style={{ maxWidth: '420px', margin: '3rem auto' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>{mode === 'login' ? 'Log In' : 'Create Account'}</h1>
      <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
        {mode === 'login' ? 'Welcome back to Koyena English.' : 'Join Koyena English to save your progress.'}
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
        {mode === 'signup' && (
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength={3}
              placeholder="e.g. english_learner_23"
              style={inputStyle}
            />
          </label>
        )}
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            style={inputStyle}
          />
        </label>

        {error && <p style={{ color: '#c0392b', fontSize: '0.9rem' }}>{error}</p>}
        {message && <p style={{ color: '#2e7d32', fontSize: '0.9rem' }}>{message}</p>}

        <button type="submit" disabled={busy} style={buttonStyle}>
          {busy ? 'Please wait...' : mode === 'login' ? 'Log In' : 'Sign Up'}
        </button>
      </form>

      <p style={{ marginTop: '1.2rem', fontSize: '0.9rem' }}>
        {mode === 'login' ? (
          <>Don't have an account?{' '}
            <button onClick={() => setMode('signup')} style={linkStyle}>Sign up</button>
          </>
        ) : (
          <>Already have an account?{' '}
            <button onClick={() => setMode('login')} style={linkStyle}>Log in</button>
          </>
        )}
      </p>
    </div>
  )
}

const inputStyle = {
  display: 'block',
  width: '100%',
  marginTop: '0.3rem',
  padding: '0.6rem 0.7rem',
  borderRadius: '6px',
  border: '1px solid var(--line)',
  fontSize: '0.95rem',
}

const buttonStyle = {
  padding: '0.7rem',
  borderRadius: '6px',
  border: 'none',
  background: 'var(--ink)',
  color: '#fff',
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: '0.95rem',
}

const linkStyle = {
  background: 'none',
  border: 'none',
  color: 'var(--accent, #1a5cb0)',
  textDecoration: 'underline',
  cursor: 'pointer',
  fontSize: '0.9rem',
  padding: 0,
}
