import { Link, useParams, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { writingTests } from '../data/writingTests.js'

export default function IeltsWriting() {
  const { testId } = useParams()
  const [task1Answer, setTask1Answer] = useState('')
  const [task2Answer, setTask2Answer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!testId) {
    return (
      <div className="container container--narrow">
        <Link to="/ielts" className="back-link">← IELTS Practice</Link>
        <h1>Writing Tests</h1>
        <div className="exam-list">
          {writingTests.map(t => (
            <div key={t.id} className="exam-row">
              <span className="exam-name">{t.title}</span>
              <Link to={`/ielts/writing/${t.id}`} className="btn-tiny btn-tiny--primary">Start</Link>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const test = writingTests.find(t => t.id === Number(testId))
  if (!test) return <Navigate to="/ielts/writing" />

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1400)
  }

  if (submitted) {
    return (
      <div className="container container--narrow">
        <Link to="/ielts/writing" className="back-link">← Writing Tests</Link>
        <p className="grading-note">This is a simulated example of AI feedback, showing what the real feature will produce once connected to a live AI backend (see think_and_answer_spec.md — the same connection powers this feature).</p>

        <h1>Feedback — {test.title}</h1>

        <div className="summary-bar">
          <div className="summary-stat"><span className="summary-number">6.5</span><span className="summary-label">Task 1 band (example)</span></div>
          <div className="summary-stat"><span className="summary-number">6.0</span><span className="summary-label">Task 2 band (example)</span></div>
        </div>

        <section className="rule-block">
          <h2>Task 1 Feedback</h2>
          <p>Example: your summary correctly identifies the overall trend, but could better highlight the specific comparison between the highest and lowest countries. Word count and structure are appropriate.</p>
        </section>

        <section className="rule-block">
          <h2>Task 2 Feedback</h2>
          <p>Example: your argument is clear and you take a definite position, but some paragraphs would benefit from more specific examples rather than general statements. Watch subject-verb agreement in longer sentences.</p>
        </section>

        <h2>Your Answers</h2>
        <div className="result-item result-item--wrong">
          <p className="result-question"><strong>Task 1:</strong></p>
          <p className="result-explanation">{task1Answer || '(no answer given)'}</p>
        </div>
        <div className="result-item result-item--wrong" style={{ marginTop: '0.7rem' }}>
          <p className="result-question"><strong>Task 2:</strong></p>
          <p className="result-explanation">{task2Answer || '(no answer given)'}</p>
        </div>

        <Link to="/ielts/writing" className="btn-primary" style={{ marginTop: '1.5rem' }}>Back to Writing Tests</Link>
      </div>
    )
  }

  return (
    <div className="container container--narrow">
      <Link to="/ielts/writing" className="back-link">← Writing Tests</Link>
      <h1>{test.title}</h1>

      <section className="rule-block">
        <h2>Task 1</h2>
        <p>{test.task1.prompt}</p>
        {test.task1.note && <p className="mistake-note">{test.task1.note}</p>}
        <textarea
          className="question-input"
          rows={8}
          value={task1Answer}
          onChange={(e) => setTask1Answer(e.target.value)}
          placeholder="Write your Task 1 answer here..."
          style={{ resize: 'vertical', fontFamily: 'inherit' }}
        />
      </section>

      <section className="rule-block">
        <h2>Task 2</h2>
        <p>{test.task2.prompt}</p>
        <textarea
          className="question-input"
          rows={12}
          value={task2Answer}
          onChange={(e) => setTask2Answer(e.target.value)}
          placeholder="Write your Task 2 answer here..."
          style={{ resize: 'vertical', fontFamily: 'inherit' }}
        />
      </section>

      <button className="btn-primary" onClick={handleSubmit} disabled={loading || !task1Answer.trim() || !task2Answer.trim()}>
        {loading ? 'Analyzing your writing…' : 'Submit for Feedback'}
      </button>
    </div>
  )
}
