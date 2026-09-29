import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useT } from '../i18n.js'

export default function AuthModal() {
  const { authModalOpen, closeAuthModal, signUpWithEmail, signInWithEmail } = useAuth()
  const { t } = useT()
  const navigate = useNavigate()

  const [mode, setMode] = useState('signin') // 'signin' | 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  if (!authModalOpen) return null

  const handleClose = () => {
    setErrorMsg('')
    setSuccessMsg('')
    closeAuthModal()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setSuccessMsg('')
    setLoading(true)

    try {
      if (mode === 'signup') {
        if (!email.trim() || !password.trim()) {
          throw new Error('Please enter both email and password.')
        }
        if (password.length < 6) {
          throw new Error('Password must be at least 6 characters.')
        }

        const { data, error } = await signUpWithEmail(email, password)
        if (error) throw error

        // Do NOT insert into public.profiles; trigger creates it
        setSuccessMsg(t('accountCreatedSuccess'))
        // Switch to Sign In tab
        setMode('signin')
      } else {
        // Sign In
        if (!email.trim() || !password.trim()) {
          throw new Error('Please enter your email and password.')
        }

        const { data, error } = await signInWithEmail(email, password)
        if (error) throw error

        handleClose()
        navigate('/')
      }
    } catch (err) {
      console.warn('Auth error:', err)
      setErrorMsg(err.message || 'Authentication failed. Please check your credentials.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-overlay" onClick={handleClose}>
      <div
        className="auth-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* X close button top right */}
        <button
          className="auth-close-btn"
          onClick={handleClose}
          aria-label="Close"
          type="button"
        >
          ✕
        </button>

        <div className="auth-header">
          {/* Small pill badge at top */}
          <span className="auth-badge">{t('portalBadge')}</span>

          {mode === 'signup' ? (
            <>
              <h2>{t('createAccountTitle')}</h2>
              <p>{t('createAccountSubtitle')}</p>
            </>
          ) : (
            <>
              <h2>{t('welcomeBack')}</h2>
              <p>{t('signInSubtitle')}</p>
            </>
          )}
        </div>

        {/* Segmented toggle: "Sign In" and "Create Account" */}
        <div className="auth-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'signin'}
            className={`auth-tab ${mode === 'signin' ? 'auth-tab--active' : ''}`}
            onClick={() => {
              setMode('signin')
              setErrorMsg('')
              setSuccessMsg('')
            }}
          >
            {t('signInTab')}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'signup'}
            className={`auth-tab ${mode === 'signup' ? 'auth-tab--active' : ''}`}
            onClick={() => {
              setMode('signup')
              setErrorMsg('')
              setSuccessMsg('')
            }}
          >
            {t('createAccountTab')}
          </button>
        </div>

        {errorMsg && (
          <div className="auth-alert auth-alert--error" role="alert">
            ⚠️ {errorMsg}
          </div>
        )}

        {successMsg && (
          <div className="auth-alert auth-alert--success" role="status">
            ✓ {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label htmlFor="auth-modal-email">{t('emailLabel')}</label>
            <input
              id="auth-modal-email"
              type="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="auth-field">
            <label htmlFor="auth-modal-password">{t('passwordLabel')}</label>
            <input
              id="auth-modal-password"
              type="password"
              placeholder={t('passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
            {mode === 'signup' && (
              <span className="auth-hint">{t('passwordHelper')}</span>
            )}
          </div>

          <button
            type="submit"
            className="btn-primary auth-submit-btn"
            disabled={loading}
          >
            {loading
              ? t('pleaseWait')
              : mode === 'signin'
              ? t('btnSignIn')
              : t('btnCreateAccount')}
          </button>
        </form>

        <div className="auth-footer">
          {mode === 'signin' ? (
            <p>
              {t('noAccountPrompt')}{' '}
              <button
                type="button"
                className="auth-link-btn"
                onClick={() => {
                  setMode('signup')
                  setErrorMsg('')
                  setSuccessMsg('')
                }}
              >
                {t('signUpFree')}
              </button>
            </p>
          ) : (
            <p>
              {t('haveAccountPrompt')}{' '}
              <button
                type="button"
                className="auth-link-btn"
                onClick={() => {
                  setMode('signin')
                  setErrorMsg('')
                  setSuccessMsg('')
                }}
              >
                {t('signInHere')}
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
