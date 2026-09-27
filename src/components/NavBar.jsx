import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { topics } from '../data/topics.js'

const ieltsItems = [
  { id: 'reading', name: 'Reading' },
  { id: 'listening', name: 'Listening' },
  { id: 'writing', name: 'Writing' },
  { id: 'speaking', name: 'Speaking' },
]

function Dropdown({ label, items, buildPath, openId, setOpenId, id }) {
  const menuRef = useRef(null)
  const open = openId === id

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenId(current => current === id ? null : current)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [id, setOpenId])

  return (
    <div
      className="dropdown"
      ref={menuRef}
      onMouseEnter={() => setOpenId(id)}
      onMouseLeave={() => setOpenId(current => current === id ? null : current)}
    >
      <button
        className="dropdown-trigger"
        onClick={() => setOpenId(open ? null : id)}
        aria-expanded={open}
      >
        {label}
        <svg width="10" height="6" viewBox="0 0 10 6" className={`dropdown-caret ${open ? 'dropdown-caret--up' : ''}`}>
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="dropdown-menu">
          <div className="dropdown-menu-inner">
            {items.map(item => (
              <Link
                key={item.id}
                to={buildPath(item)}
                className="dropdown-item"
                onClick={() => setOpenId(null)}
              >
                <span>{item.name}</span>
                {item.hasContent === false && <span className="badge badge--tiny">Soon</span>}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function NavBar() {
  const [openId, setOpenId] = useState(null)

  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand" onClick={() => setOpenId(null)}>Koyena English</Link>

      <nav className="navbar-nav">
        <Dropdown
          id="grammar"
          label="Grammar"
          items={topics}
          buildPath={(t) => `/topic/${t.id}`}
          openId={openId}
          setOpenId={setOpenId}
        />

        {/* IELTS Practice dropdown hidden until admin panel is built — code intact in App.jsx routes and components/Ielts*.jsx, just not linked here */}

        <Link to="/think-answer" className="navbar-link">Think &amp; Answer</Link>
        <Link to="/profile" className="navbar-link">My Progress</Link>
      </nav>
    </header>
  )
}
