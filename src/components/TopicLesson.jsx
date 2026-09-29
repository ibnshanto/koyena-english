import { useParams, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { getTopic } from '../data/topics.js'

function RuleBlock({ rule }) {
  return (
    <div className="rule-item">
      <h3>{rule.title}</h3>
      <p>{rule.body}</p>
      <ul className="example-list">
        {rule.examples.map((ex, j) => <li key={j}>{ex}</li>)}
      </ul>
      {rule.mistake && <p className="mistake-note"><strong>Common mistake:</strong> {rule.mistake}</p>}
    </div>
  )
}

function CollapsibleSection({ section, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <section className="rule-block collapsible-section">
      <button className="section-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
        <h2>{section.title}</h2>
        <svg width="12" height="7" viewBox="0 0 12 7" className={`toggle-caret ${open ? 'toggle-caret--up' : ''}`}>
          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div className="section-body">
          {section.rules.map((rule, i) => <RuleBlock key={i} rule={rule} />)}
        </div>
      )}
    </section>
  )
}

export default function TopicLesson() {
  const { topicId } = useParams()
  const topic = getTopic(topicId)
  const [revealed, setRevealed] = useState({})

  if (!topic) return <Navigate to="/" />
  if (!topic.hasContent) {
    return (
      <div className="container">
        <p className="soon-message">The lesson for "{topic.name}" is being written and will be added soon.</p>
        <Link to="/grammar" className="btn-secondary">← Back to topics</Link>
      </div>
    )
  }

  const { lesson } = topic
  const usesSections = Array.isArray(lesson.sections)

  return (
    <div className="container container--narrow">
      <div className="lesson-header">
        <p className="eyebrow-free">{topic.subtitle}</p>
        <h1>{topic.name}</h1>
        <Link to={`/topic/${topicId}/exams`} className="btn-primary">Take Exam →</Link>
      </div>

      <p className="lesson-intro">{lesson.intro}</p>

      {topic.videoUrl ? (
        <div className="video-embed">
          <iframe
            src={topic.videoUrl}
            title={`${topic.name} video lesson`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="video-placeholder">
          <span>🎬 Video lesson coming soon</span>
        </div>
      )}

      {usesSections ? (
        lesson.sections.map((section, i) => (
          <CollapsibleSection key={i} section={section} defaultOpen={i === 0} />
        ))
      ) : (
        lesson.rules.map((rule, i) => (
          <section key={i} className="rule-block">
            <h2>{rule.title}</h2>
            <p>{rule.body}</p>
            <ul className="example-list">
              {rule.examples.map((ex, j) => <li key={j}>{ex}</li>)}
            </ul>
            {rule.mistake && <p className="mistake-note"><strong>Common mistake:</strong> {rule.mistake}</p>}
          </section>
        ))
      )}

      <section className="rule-block">
        <h2>Common Mistakes Learners Make</h2>
        <ul className="mistakes-list">
          {lesson.mistakes.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
      </section>

      {lesson.decisionTree && (
        <section className="rule-block decision-tree">
          <h2>Decision Tree — Which Article Do I Use?</h2>
          <ol className="decision-tree-list">
            {lesson.decisionTree.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </section>
      )}

      <section className="quick-check">
        <h2>Quick Check — Test Yourself Before the Exam</h2>
        <p className="quick-check-hint">Try these, then reveal the answer.</p>
        {lesson.quickCheck.map((item, i) => (
          <div key={i} className="quick-check-item">
            <p>{i + 1}. {item.q}</p>
            {revealed[i] ? (
              <p className="quick-check-answer"><strong>{item.a}</strong> — {item.why}</p>
            ) : (
              <button className="btn-tiny" onClick={() => setRevealed({ ...revealed, [i]: true })}>Show answer</button>
            )}
          </div>
        ))}
      </section>

      <div className="lesson-footer">
        <Link to={`/topic/${topicId}/exams`} className="btn-primary">Take Exam →</Link>
      </div>
    </div>
  )
}
