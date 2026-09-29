import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function HomePage() {
  const { user, openAuthModal } = useAuth()

  return (
    <div className="home-wrapper">
      {/* Background Decorative Mesh / Ambient Glow */}
      <div className="home-ambient-glow" aria-hidden="true" />

      <div className="container home-container">
        {/* HERO SECTION */}
        <section className="home-hero-saas">
          <div className="home-badge-container">
            <span className="home-badge-pill">
              <span className="home-badge-dot" />
              FREE ENGLISH GRAMMAR PRACTICE
            </span>
          </div>

          <h1 className="home-hero-title">
            Learn English grammar.{' '}
            <span className="home-hero-highlight">Practice until it sticks.</span>
          </h1>

          <p className="home-hero-sub">
            Koyena English gives you clear lessons and thousands of practice questions, with an explanation for every answer, so you understand your mistakes and improve fast.
          </p>

          <div className="home-cta-actions">
            <Link to="/grammar" className="home-btn-primary">
              Start Practicing
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>

            {user ? (
              <Link to="/progress" className="home-btn-secondary">
                My Progress
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10" />
                  <path d="M12 20V4" />
                  <path d="M6 20v-6" />
                </svg>
              </Link>
            ) : (
              <button
                type="button"
                onClick={openAuthModal}
                className="home-btn-secondary"
              >
                Create Free Account
              </button>
            )}
          </div>

          {/* Trust / Credibility Badge */}
          <div className="home-trust-strip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="home-trust-icon">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>Free to use · No credit card required · Practice instantly</span>
          </div>

          {/* Stat Cards Strip (Each in its own visual card) */}
          <div className="home-stats-grid">
            <div className="home-stat-card">
              <span className="home-stat-value">20</span>
              <span className="home-stat-tag">grammar topics</span>
            </div>
            <div className="home-stat-card">
              <span className="home-stat-value">50</span>
              <span className="home-stat-tag">exams per topic</span>
            </div>
            <div className="home-stat-card">
              <span className="home-stat-value home-stat-value--check">✓</span>
              <span className="home-stat-tag">Explanation for every answer</span>
            </div>
          </div>
        </section>

        {/* SECTION: WHAT IS KOYENA ENGLISH? */}
        <section className="home-spotlight-section">
          <div className="home-spotlight-card">
            <div className="home-spotlight-badge">OVERVIEW</div>
            <h2 className="home-section-heading">What is Koyena English?</h2>
            <p className="home-spotlight-body">
              Koyena English is a practice platform for students who want to get better at English grammar. Read a short lesson on a topic, then test yourself with real practice exams. You see your score right away and learn from the explanation behind every answer. You can use everything without an account.
            </p>
          </div>
        </section>

        {/* SECTION: HOW IT HELPS YOU (3 Cards) */}
        <section className="home-feature-section">
          <div className="home-section-header">
            <span className="home-pre-heading">METHODOLOGY</span>
            <h2 className="home-section-heading">How it helps you</h2>
          </div>

          <div className="home-helps-deck">
            <div className="home-help-box">
              <div className="home-icon-bubble home-icon-bubble--navy">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M6 6h10" />
                  <path d="M6 10h10" />
                </svg>
              </div>
              <h3 className="home-card-title">Learn the rule</h3>
              <p className="home-card-text">
                Read clear, focused lessons that explain how the grammar works before you practice.
              </p>
            </div>

            <div className="home-help-box">
              <div className="home-icon-bubble home-icon-bubble--accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
              </div>
              <h3 className="home-card-title">Practice with exams</h3>
              <p className="home-card-text">
                Work through sets of practice questions designed to test your knowledge thoroughly.
              </p>
            </div>

            <div className="home-help-box">
              <div className="home-icon-bubble home-icon-bubble--green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="home-card-title">Understand your mistakes</h3>
              <p className="home-card-text">
                Read the explanation behind each answer to see why it is right and how to avoid errors.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: WHAT YOU GET (Card Grid) */}
        <section className="home-feature-section">
          <div className="home-section-header">
            <span className="home-pre-heading">FEATURES</span>
            <h2 className="home-section-heading">What you get</h2>
          </div>

          <div className="home-gets-grid">
            <div className="home-get-card">
              <div className="home-get-icon">📚</div>
              <div className="home-get-content">
                <strong>20 grammar topics</strong>
                <p>covering core foundations and advanced sentence structures</p>
              </div>
            </div>

            <div className="home-get-card">
              <div className="home-get-icon">📝</div>
              <div className="home-get-content">
                <strong>1,000 practice questions per topic (50 exams)</strong>
                <p>structured practice sets designed to build deep mastery</p>
              </div>
            </div>

            <div className="home-get-card">
              <div className="home-get-icon">💡</div>
              <div className="home-get-content">
                <strong>Answer explanations</strong>
                <p>for every single question to help you learn from errors</p>
              </div>
            </div>

            <div className="home-get-card">
              <div className="home-get-icon">💭</div>
              <div className="home-get-content">
                <strong>Think &amp; Answer (open-ended practice)</strong>
                <p>real-world prompt practice to build spontaneous English skills</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: HOW TO START (Horizontal 3-Step Flow) */}
        <section className="home-feature-section">
          <div className="home-section-header">
            <span className="home-pre-heading">QUICK START</span>
            <h2 className="home-section-heading">How to start</h2>
          </div>

          <div className="home-steps-flow">
            <div className="home-flow-step">
              <div className="home-step-badge">01</div>
              <div className="home-step-card">
                <h3 className="home-step-title">Pick a topic</h3>
                <p className="home-step-desc">
                  Go to the Grammar page and select any topic you want to master.
                </p>
              </div>
            </div>

            <div className="home-flow-arrow" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>

            <div className="home-flow-step">
              <div className="home-step-badge">02</div>
              <div className="home-step-card">
                <h3 className="home-step-title">Read the lesson then take an exam</h3>
                <p className="home-step-desc">
                  Review the key concepts and start with Exam 1 to test yourself.
                </p>
              </div>
            </div>

            <div className="home-flow-arrow" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>

            <div className="home-flow-step">
              <div className="home-step-badge">03</div>
              <div className="home-step-card">
                <h3 className="home-step-title">Check the explanations and try again</h3>
                <p className="home-step-desc">
                  Review your results, understand where you went wrong, and retake the exam to improve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GUEST NOTE / FINAL CTA */}
        {!user && (
          <section className="home-callout-band">
            <div className="home-callout-inner">
              <div className="home-callout-content">
                <span className="home-callout-pill">NO SIGN-UP REQUIRED</span>
                <p className="home-callout-heading">
                  No account needed to practice. Create a free account when you want to
                  save your results and track your progress.
                </p>
              </div>
              <button type="button" onClick={openAuthModal} className="home-callout-btn">
                Create Free Account
              </button>
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className="home-saas-footer">
          <div className="home-footer-nav">
            <Link to="/grammar" className="home-footer-link">Grammar</Link>
            <span className="home-footer-sep">•</span>
            <Link to="/think-answer" className="home-footer-link">Think &amp; Answer</Link>
            {user && (
              <>
                <span className="home-footer-sep">•</span>
                <Link to="/progress" className="home-footer-link">My Progress</Link>
                <span className="home-footer-sep">•</span>
                <Link to="/settings" className="home-footer-link">Settings</Link>
              </>
            )}
          </div>
          <p className="home-footer-tagline">
            Koyena English — Clear lessons, real practice exams, and detailed explanations.
          </p>
        </footer>
      </div>
    </div>
  )
}
