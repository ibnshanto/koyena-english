import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { useT } from '../i18n.js'

export default function Profile() {
  const { user, profile, updateProfile, openAuthModal } = useAuth()
  const { t } = useT()

  const [displayName, setDisplayName] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (profile?.username) {
      setDisplayName(profile.username)
    } else if (user?.email) {
      setDisplayName(user.email.split('@')[0])
    }
  }, [profile, user])

  if (!user) {
    return (
      <div className="container container--narrow" style={{ marginTop: '3rem', textAlign: 'center' }}>
        <div className="guest-prompt-card">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👤</div>
          <h2>{t('profileTitle')}</h2>
          <p style={{ margin: '0.5rem 0 1.5rem', color: 'var(--ink-soft)' }}>
            {t('guestProfilePrompt')}
          </p>
          <button type="button" onClick={openAuthModal} className="btn-primary">
            {t('signIn')}
          </button>
        </div>
      </div>
    )
  }

  const currentDisplay = displayName || profile?.username || user.email?.split('@')[0] || 'S'
  const firstLetter = (currentDisplay.charAt(0) || 'S').toUpperCase()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    const trimmed = displayName.trim().slice(0, 30)
    if (!trimmed) {
      setError('Display name is required.')
      return
    }

    setLoading(true)
    const res = await updateProfile({ username: trimmed })
    setLoading(false)

    if (res.success) {
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } else {
      setError(res.error || 'Failed to update profile.')
    }
  }

  return (
    <div className="container container--narrow" style={{ marginTop: '2rem' }}>
      <h1>{t('profileTitle')}</h1>

      <div className="profile-card">
        {/* Big Avatar with First Letter */}
        <div className="profile-avatar-large">
          {firstLetter}
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          {error && (
            <div className="auth-alert auth-alert--error" style={{ marginBottom: '1rem' }}>
              ⚠️ {error}
            </div>
          )}

          {success && (
            <div className="auth-alert auth-alert--success" style={{ marginBottom: '1rem' }}>
              ✓ {t('savedSuccess')}
            </div>
          )}

          {/* Email (Read-only) */}
          <div className="auth-field">
            <label>{t('emailReadOnlyLabel')}</label>
            <input
              type="email"
              value={user.email || ''}
              readOnly
              disabled
              className="input-readonly"
            />
          </div>

          {/* Editable Display Name */}
          <div className="auth-field">
            <label htmlFor="display-name-input">{t('displayNameLabel')}</label>
            <input
              id="display-name-input"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              maxLength={30}
              placeholder={t('displayNamePlaceholder')}
              required
            />
            <span className="auth-hint">Max 30 characters. Duplicates are allowed.</span>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
            disabled={loading}
          >
            {loading ? t('saving') : t('saveChanges')}
          </button>
        </form>
      </div>
    </div>
  )
}
