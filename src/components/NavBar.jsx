import { Link, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { topics } from '../data/topics.js'
import { useAuth } from '../context/AuthContext.jsx'
import { useT } from '../i18n.js'

export default function NavBar() {
  const [grammarOpen, setGrammarOpen] = useState(false)
  const grammarMenuRef = useRef(null)

  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef(null)

  const { user, profile, openAuthModal, signOut } = useAuth()
  const { t } = useT()
  const navigate = useNavigate()

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (grammarMenuRef.current && !grammarMenuRef.current.contains(e.target)) {
        setGrammarOpen(false)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const displayName = profile?.username || (user?.email ? user.email.split('@')[0] : 'Student')
  const firstLetter = (displayName.charAt(0) || 'S').toUpperCase()
  const firstWord = displayName.trim().split(/\s+/)[0] || 'Student'

  const handleLogOut = async () => {
    setUserMenuOpen(false)
    await signOut()
    navigate('/')
  }

  return (
    <header className="navbar">
      <Link
        to="/"
        className="navbar-brand"
        onClick={() => {
          setUserMenuOpen(false)
          setGrammarOpen(false)
        }}
      >
        {t('brand')}
      </Link>

      <nav className="navbar-nav">
        {/* Grammar with active dropdown and direct /grammar link */}
        <div
          className="dropdown"
          ref={grammarMenuRef}
          onMouseEnter={() => setGrammarOpen(true)}
          onMouseLeave={() => setGrammarOpen(false)}
        >
          <div className="navbar-dropdown-split">
            <Link
              to="/grammar"
              className="navbar-link"
              onClick={() => setGrammarOpen(false)}
            >
              {t('grammar')}
            </Link>
            <button
              type="button"
              className="dropdown-caret-btn"
              onClick={() => setGrammarOpen(!grammarOpen)}
              aria-expanded={grammarOpen}
              aria-label="Toggle grammar topics menu"
            >
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                className={`dropdown-caret ${grammarOpen ? 'dropdown-caret--up' : ''}`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {grammarOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-menu-inner">
                <Link
                  to="/grammar"
                  className="dropdown-item dropdown-item--header"
                  onClick={() => setGrammarOpen(false)}
                >
                  <span>📖 <strong>All 20 Topics</strong></span>
                  <span className="dropdown-all-arrow">View all →</span>
                </Link>
                <div className="dropdown-divider" />
                {topics.map(topic => (
                  <Link
                    key={topic.id}
                    to={`/topic/${topic.id}`}
                    className="dropdown-item"
                    onClick={() => setGrammarOpen(false)}
                  >
                    <span>{topic.name}</span>
                    {!topic.hasContent && (
                      <span className="badge badge--tiny">{t('soon') || 'Soon'}</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* IELTS Practice dropdown hidden until admin panel is built — code intact in App.jsx routes and components/Ielts*.jsx, just not linked here */}

        <Link to="/think-answer" className="navbar-link">
          {t('thinkAnswer')}
        </Link>

        {user ? (
          <div className="nav-user-menu-container" ref={userMenuRef}>
            <button
              type="button"
              className="nav-user-btn"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              aria-expanded={userMenuOpen}
            >
              <span className="navbar-avatar-circle">{firstLetter}</span>
              <span className="navbar-display-name">{firstWord}</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                className={`dropdown-caret ${userMenuOpen ? 'dropdown-caret--up' : ''}`}
                style={{ marginLeft: '2px' }}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {userMenuOpen && (
              <div className="user-dropdown-menu">
                <Link
                  to="/profile"
                  className="user-dropdown-item"
                  onClick={() => setUserMenuOpen(false)}
                >
                  👤 {t('myProfile')}
                </Link>
                <Link
                  to="/progress"
                  className="user-dropdown-item"
                  onClick={() => setUserMenuOpen(false)}
                >
                  📊 {t('myProgress')}
                </Link>
                <Link
                  to="/settings"
                  className="user-dropdown-item"
                  onClick={() => setUserMenuOpen(false)}
                >
                  ⚙️ {t('settings')}
                </Link>
                <div className="user-dropdown-divider" />
                <button
                  type="button"
                  className="user-dropdown-item user-dropdown-logout"
                  onClick={handleLogOut}
                >
                  🚪 {t('logOut')}
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            type="button"
            onClick={openAuthModal}
            className="navbar-auth-btn"
          >
            {t('signIn')}
          </button>
        )}
      </nav>
    </header>
  )
}
