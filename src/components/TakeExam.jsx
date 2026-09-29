import { useParams, Link, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTopic } from '../data/topics.js'
import examsData from '../data/exams.json'
import { getExamResult, saveExamResult, resetExam } from '../storage.js'
import { getDetailedExplanation } from '../utils/explanationHelper.js'
import { useAuth } from '../context/AuthContext.jsx'
import { useT } from '../i18n.js'

function normalize(str) {
  return (str || '').trim().toLowerCase().replace(/[.,!?]/g, '')
}

export default function TakeExam() {
  const { topicId, examNumber } = useParams()
  const topic = getTopic(topicId)
  const questions = examsData[topicId]?.[examNumber] || []

  const { user, openAuthModal } = useAuth()
  const { t } = useT()

  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState(null)
  const [filterMode, setFilterMode] = useState('all') // 'all' | 'mistakes' | 'correct'
  const [loadingInitial, setLoadingInitial] = useState(false)

  useEffect(() => {
    let isMounted = true

    if (user?.id) {
      setLoadingInitial(true)
      getExamResult(user.id, topicId, examNumber).then(existing => {
        if (isMounted) {
          if (existing) {
            setResult(existing)
            setSubmitted(true)
          } else {
            setAnswers({})
            setSubmitted(false)
            setResult(null)
          }
          setLoadingInitial(false)
        }
      }).catch(() => {
        if (isMounted) setLoadingInitial(false)
      })
    } else {
      // Guest mode: clear any result state
      setAnswers({})
      setSubmitted(false)
      setResult(null)
      setLoadingInitial(false)
    }

    setFilterMode('all')

    return () => {
      isMounted = false
    }
  }, [topicId, examNumber, user?.id])

  if (!topic) return <Navigate to="/" />
  if (questions.length === 0) {
    return (
      <div className="container container--narrow">
        <p className="soon-message">
          This exam's questions haven't been loaded into the demo yet. Exams follow the structured curriculum and can be practiced across the topic hub.
        </p>
        <Link to={`/topic/${topicId}/exams`} className="btn-secondary">← Back to exam list</Link>
      </div>
    )
  }

  const handleSubmit = async () => {
    let score = 0
    const gradedAnswers = questions.map((q, i) => {
      const userAnswer = answers[i] || ''
      const correct = normalize(userAnswer) === normalize(q.answer)
      if (correct) score++
      return {
        q: q.q,
        userAnswer,
        answer: q.answer,
        correct,
        rawExplanation: q.explanation || ''
      }
    })
    const newResult = { score, total: questions.length, answers: gradedAnswers }

    // Only save if user is logged in
    if (user?.id) {
      await saveExamResult(user.id, topicId, examNumber, newResult)
    }

    setResult(newResult)
    setSubmitted(true)
    setFilterMode('all')
  }

  const handleRetake = async () => {
    if (user?.id) {
      await resetExam(user.id, topicId, examNumber)
    }
    setAnswers({})
    setResult(null)
    setSubmitted(false)
    setFilterMode('all')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loadingInitial) {
    return (
      <div className="container container--narrow" style={{ marginTop: '3rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--ink-soft)' }}>Loading exam...</p>
      </div>
    )
  }

  if (submitted && result) {
    const percentage = Math.round((result.score / result.total) * 100)
    const mistakeCount = result.total - result.score
    const correctCount = result.score

    const filteredAnswers = result.answers.map((a, i) => ({ ...a, originalIndex: i })).filter(a => {
      if (filterMode === 'mistakes') return !a.correct
      if (filterMode === 'correct') return a.correct
      return true
    })

    return (
      <div className="container container--narrow">
        {/* Guest prompt banner on result screen */}
        {!user && (
          <div className="guest-exam-banner">
            <span>💡 {t('guestExamBanner')}</span>
            <button
              type="button"
              onClick={openAuthModal}
              className="btn-secondary"
              style={{ padding: '0.35rem 0.8rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
            >
              {t('signIn')} →
            </button>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <Link to={`/topic/${topicId}/exams`} className="back-link" style={{ margin: 0 }}>← Back to Exam Hub</Link>
          <button onClick={handleRetake} className="btn-secondary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
            🔄 Retake Exam
          </button>
        </div>

        <div className="results-header">
          <div className="results-score">{result.score} / {result.total}</div>
          <div className="results-sub" style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--navy)', marginTop: '0.25rem' }}>
            {topic.name} — Exam {examNumber} ({percentage}%)
          </div>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--ink-soft)' }}>
            {percentage === 100
              ? '🎉 Outstanding! Perfect score — you have mastered these rules!'
              : percentage >= 80
              ? '👏 Great job! Review the simple explanations below to iron out your minor errors.'
              : '💪 Good practice effort! Carefully review the simple rules and explanations below before retaking.'}
          </p>
        </div>

        {topic.transformFormat && (
          <p className="grading-note">
            Note: This topic checks for an exact model answer. Read each explanation below to understand the sentence construction.
          </p>
        )}

        {/* Filter Bar */}
        <div className="results-filter-bar">
          <span className="results-filter-label">Filter View:</span>
          <button
            className={`results-filter-pill ${filterMode === 'all' ? 'active' : ''}`}
            onClick={() => setFilterMode('all')}
          >
            All Questions ({result.total})
          </button>
          <button
            className={`results-filter-pill ${filterMode === 'mistakes' ? 'active-mistakes' : ''}`}
            onClick={() => setFilterMode('mistakes')}
          >
            ❌ Mistakes Only ({mistakeCount})
          </button>
          <button
            className={`results-filter-pill ${filterMode === 'correct' ? 'active-correct' : ''}`}
            onClick={() => setFilterMode('correct')}
          >
            ✅ Correct Only ({correctCount})
          </button>
        </div>

        {/* Results List with Simple, Clear, 3-Part Explanations */}
        <div className="results-list">
          {filteredAnswers.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2.5rem', background: 'var(--paper-raised)', borderRadius: 'var(--radius)', border: '1px solid var(--line)' }}>
              <p style={{ margin: 0, fontWeight: 500, color: 'var(--ink)' }}>
                {filterMode === 'mistakes' ? '🎉 No mistakes in this exam! Everything was correct.' : 'No items match this filter.'}
              </p>
            </div>
          ) : (
            filteredAnswers.map((a) => {
              const details = getDetailedExplanation(a.q, a.answer, a.rawExplanation, topicId)
              return (
                <div key={a.originalIndex} className={`result-item ${a.correct ? 'result-item--correct' : 'result-item--wrong'}`}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <p className="result-question" style={{ fontWeight: 600, fontSize: '0.98rem' }}>
                      {a.originalIndex + 1}. {a.q}
                    </p>
                    <span style={{
                      padding: '0.15rem 0.55rem',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      background: a.correct ? 'var(--ok-bg)' : 'var(--bad-bg)',
                      color: a.correct ? 'var(--ok)' : 'var(--bad)',
                      whiteSpace: 'nowrap'
                    }}>
                      {a.correct ? 'Correct' : 'Needs Review'}
                    </span>
                  </div>

                  <div className="result-verdict-box">
                    {a.correct ? (
                      <p className="result-verdict" style={{ color: 'var(--ok)', margin: '0.2rem 0 0.6rem' }}>
                        ✓ <strong>Your answer:</strong> "{a.userAnswer}" (Correct)
                      </p>
                    ) : (
                      <p className="result-verdict" style={{ color: 'var(--clay)', margin: '0.2rem 0 0.6rem' }}>
                        ✗ <strong>Your answer:</strong> "{a.userAnswer || '(blank)'}" &nbsp;•&nbsp; <strong>Correct answer:</strong> <span style={{ textDecoration: 'underline', color: 'var(--navy)' }}>"{a.answer}"</span>
                      </p>
                    )}
                  </div>

                  {/* Simple, Easy-To-Understand Structured Explanation Card */}
                  <div className="explanation-structured-card">
                    <div className="explanation-section explanation-why">
                      <div className="explanation-header">
                        <span className="explanation-icon">🔍</span>
                        <strong>Why This Answer Fits:</strong>
                      </div>
                      <p className="explanation-text">{details.why}</p>
                    </div>

                    <div className="explanation-section explanation-rule">
                      <div className="explanation-header">
                        <span className="explanation-icon">💡</span>
                        <strong>Simple Golden Rule:</strong>
                      </div>
                      <p className="explanation-text">{details.rule}</p>
                    </div>

                    <div className="explanation-section explanation-trap">
                      <div className="explanation-header">
                        <span className="explanation-icon">⚠️</span>
                        <strong>Watch Out / Common Mistake:</strong>
                      </div>
                      <p className="explanation-text">{details.trap}</p>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem', marginBottom: '2.5rem' }}>
          <button onClick={handleRetake} className="btn-secondary" style={{ flex: 1, minWidth: '160px' }}>
            🔄 Retake Exam Now
          </button>
          <Link to={`/topic/${topicId}/exams`} className="btn-primary" style={{ flex: 1, minWidth: '160px', textAlign: 'center' }}>
            Back to Exam Hub →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container container--narrow">
      <Link to={`/topic/${topicId}/exams`} className="back-link">← Exam list</Link>
      <h1>{topic.name} — Exam {examNumber}</h1>
      <p className="exam-instructions">
        {topic.transformFormat
          ? "Read each sentence and rewrite it fully in the box below, then submit at the end. You'll see simple, detailed explanations after submitting."
          : "Fill in each blank, then submit at the end. You'll see simple, detailed explanations after submitting."}
      </p>

      <div className="question-list">
        {questions.map((q, i) => (
          <div key={i} className="question-item">
            <p className="question-text">{i + 1}. {q.q}</p>
            <input
              type="text"
              className="question-input"
              value={answers[i] || ''}
              onChange={(e) => setAnswers({ ...answers, [i]: e.target.value })}
              placeholder="Type your answer"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button className="btn-primary" onClick={handleSubmit}>Submit Exam & Review Explanations</button>
        <span style={{ fontSize: '0.85rem', color: 'var(--ink-soft)' }}>
          {Object.values(answers).filter(v => (v || '').trim().length > 0).length} of {questions.length} answered
        </span>
      </div>
    </div>
  )
}
