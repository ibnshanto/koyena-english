import { Link } from 'react-router-dom'
import { useT } from '../i18n.js'

export default function SettingsPage() {
  const { t, theme, setTheme } = useT()

  return (
    <div className="container container--narrow" style={{ marginTop: '2rem' }}>
      <h1>{t('settingsTitle')}</h1>

      <div className="settings-container">
        {/* Appearance Section */}
        <div className="settings-card">
          <h3>🎨 {t('appearanceSection')}</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)', margin: '0.25rem 0 1rem' }}>
            Choose between daytime clean light mode or night-friendly dark mode.
          </p>

          <div className="settings-toggle-group">
            <button
              type="button"
              className={`settings-toggle-btn ${theme === 'light' ? 'settings-toggle-btn--active' : ''}`}
              onClick={() => setTheme('light')}
            >
              ☀️ {t('themeLight')}
            </button>
            <button
              type="button"
              className={`settings-toggle-btn ${theme === 'dark' ? 'settings-toggle-btn--active' : ''}`}
              onClick={() => setTheme('dark')}
            >
              🌙 {t('themeDark')}
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="settings-card">
          <h3>👤 {t('profileSection')}</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)', margin: '0.25rem 0 1rem' }}>
            Update your student display name and account information.
          </p>

          <Link to="/profile" className="btn-secondary" style={{ display: 'inline-block' }}>
            {t('goToProfileBtn')}
          </Link>
        </div>
      </div>
    </div>
  )
}
