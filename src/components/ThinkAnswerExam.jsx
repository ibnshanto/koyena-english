import { useParams, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { thinkAnswerSets } from '../data/thinkAnswerQuestions.js'

export default function ThinkAnswerExam() {
  const { setId } = useParams()
  const set = thinkAnswerSets.find(s => s.id === Number(setId))
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!set) return <Navigate to="/think-answer" />

  const allAnswered = set.questions.every((_, i) => (answers[i] || '').trim().length > 0)

  const handleSubmit = () => {
    setLoading(true)
    // NOTE: Real analysis requires a live call to the Anthropic API, sending all
    // answers together and requesting the 8-part breakdown (see think_and_answer_spec.md).
    // This demo simulates that response so the full UI/flow can be reviewed and tested
    // before the backend connection is wired up.
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1400)
  }

  if (submitted) {
    return (
      <div className="container container--narrow">
        <Link to="/think-answer" className="back-link">← Think &amp; Answer sets</Link>

        <p className="grading-note">
          This is a simulated example of the analysis, showing what the real feature will produce.
          Live analysis requires connecting the Anthropic API to grade actual submitted answers — see
          the build spec for this feature (think_and_answer_spec.md) for what's needed to make this real.
        </p>

        <h1>Your Results — {set.title}</h1>

        <div className="summary-bar">
          <div className="summary-stat">
            <span className="summary-number">6.0</span>
            <span className="summary-label">Overall band (example)</span>
          </div>
          <div className="summary-stat">
            <span className="summary-number">{set.questions.length}</span>
            <span className="summary-label">Answers reviewed</span>
          </div>
        </div>

        <section className="rule-block">
          <h2>Grammar mistakes</h2>
          <p>Example: subject-verb agreement errors appeared in 3 of your answers (e.g. "the news are" instead of "the news is"). Article usage ("a/an/the") was inconsistent in longer answers.</p>
        </section>

        <section className="rule-block">
          <h2>Vocabulary problems</h2>
          <p>Example: frequent reliance on basic words like "good," "bad," and "very" where more precise vocabulary would strengthen your answers, especially in the opinion-based questions.</p>
        </section>

        <section className="rule-block">
          <h2>Sentence structure issues</h2>
          <p>Example: several answers used short, simple sentences back-to-back rather than combining ideas with linking words (however, because, although).</p>
        </section>

        <section className="rule-block">
          <h2>Unnatural expressions</h2>
          <p>Example: phrases like "I am agree" instead of "I agree," and "since long time" instead of "for a long time" appeared more than once.</p>
        </section>

        <section className="rule-block">
          <h2>Repeated patterns</h2>
          <p>Your most consistent issue across answers was subject-verb agreement and article usage — these two areas appeared in nearly every response.</p>
        </section>

        <section className="rule-block">
          <h2>Recommended focus</h2>
          <p>Based on this exam, practicing the <Link to="/topic/subject-verb-agreement">Subject-Verb Agreement</Link> and <Link to="/topic/articles">Articles</Link> grammar topics would directly address your most repeated mistakes.</p>
        </section>

        <h2>Your Answers, Corrected</h2>
        <div className="results-list">
          {set.questions.map((q, i) => (
            <div key={i} className="result-item result-item--wrong">
              <p className="result-question"><strong>Q:</strong> {q}</p>
              <p className="result-verdict">Your answer:</p>
              <p className="result-explanation" style={{ marginBottom: '0.6rem' }}>{answers[i]}</p>
              <p className="result-verdict">Example of a corrected/improved version:</p>
              <p className="result-explanation">(In the live version, the AI rewrites your specific answer here with a short note on what changed and why.)</p>
            </div>
          ))}
        </div>

        <Link to="/think-answer" className="btn-primary">Back to Think &amp; Answer</Link>
      </div>
    )
  }

  return (
    <div className="container container--narrow">
      <Link to="/think-answer" className="back-link">← Think &amp; Answer sets</Link>
      <h1>{set.title}</h1>
      <p className="exam-instructions">
        Write your own answer to each question below, in your own words. No corrections or hints will appear while
        you write. Submit once you've answered everything.
      </p>

      <div className="question-list">
        {set.questions.map((q, i) => (
          <div key={i} className="question-item">
            <p className="question-text">{i + 1}. {q}</p>
            <textarea
              className="question-input"
              rows={4}
              value={answers[i] || ''}
              onChange={(e) => setAnswers({ ...answers, [i]: e.target.value })}
              placeholder="Write your answer here..."
              style={{ resize: 'vertical', fontFamily: 'inherit' }}
            />
          </div>
        ))}
      </div>

      <button className="btn-primary" onClick={handleSubmit} disabled={!allAnswered || loading}>
        {loading ? 'Analyzing your answers…' : 'Submit Exam'}
      </button>
      {!allAnswered && <p style={{ fontSize: '0.82rem', color: 'var(--ink-soft)', marginTop: '0.6rem' }}>Answer all questions to submit.</p>}
    </div>
  )
}
