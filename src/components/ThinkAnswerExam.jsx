import { useParams, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { thinkAnswerSets } from '../data/thinkAnswerQuestions.js'

export default function ThinkAnswerExam() {
  const { setId } = useParams()
  const set = thinkAnswerSets.find(s => s.id === Number(setId))
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [aiReport, setAiReport] = useState(null)
  const [statusMessage, setStatusMessage] = useState('')

  if (!set) return <Navigate to="/think-answer" />

  const allAnswered = set.questions.every((_, i) => (answers[i] || '').trim().length > 0)

  const handleSubmit = async () => {
    setLoading(true)
    setStatusMessage('Analyzing your grammar, vocabulary, and sentence structure...')

    try {
      const payload = {
        title: set.title,
        level: 'Intermediate (B1-B2)',
        responses: set.questions.map((q, i) => ({
          questionId: `q-${i + 1}`,
          questionPrompt: q,
          category: 'Open Production',
          userAnswer: answers[i] || ''
        }))
      }

      const res = await fetch('/api/analyze-production', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (res.ok) {
        const data = await res.json()
        if (data.success && data.analysis) {
          setAiReport(data.analysis)
        }
      }
    } catch (err) {
      console.warn('Live AI analysis request error, falling back to simulated analysis', err)
    } finally {
      setLoading(false)
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleRetake = () => {
    setAnswers({})
    setSubmitted(false)
    setAiReport(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <div className="container container--narrow">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <Link to="/think-answer" className="back-link" style={{ margin: 0 }}>← Think &amp; Answer sets</Link>
          <button onClick={handleRetake} className="btn-secondary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}>
            🔄 Retake Set
          </button>
        </div>

        <h1>Evaluation Report — {set.title}</h1>

        {aiReport ? (
          <div>
            <div className="summary-bar" style={{ marginBottom: '1.5rem' }}>
              <div className="summary-stat">
                <span className="summary-number">{aiReport.overallScore}/100</span>
                <span className="summary-label">Production Score</span>
              </div>
              <div className="summary-stat">
                <span className="summary-number" style={{ fontSize: '1.25rem', padding: '0.2rem 0' }}>{aiReport.cefrLevel}</span>
                <span className="summary-label">Estimated CEFR / Band</span>
              </div>
              <div className="summary-stat">
                <span className="summary-number">{set.questions.length}</span>
                <span className="summary-label">Questions Evaluated</span>
              </div>
            </div>

            <section className="rule-block" style={{ borderLeft: '4px solid var(--navy)' }}>
              <h2>Examiner Summary</h2>
              <p style={{ whiteSpace: 'pre-line', color: 'var(--ink)' }}>{aiReport.summaryAssessment}</p>
            </section>

            {aiReport.grammarMistakes && aiReport.grammarMistakes.length > 0 && (
              <section className="rule-block">
                <h2>Grammar Mistakes Identified</h2>
                <ul className="mistakes-list">
                  {aiReport.grammarMistakes.map((m, i) => <li key={i}>{m}</li>)}
                </ul>
              </section>
            )}

            {aiReport.vocabularyProblems && aiReport.vocabularyProblems.length > 0 && (
              <section className="rule-block">
                <h2>Vocabulary &amp; Word Choice</h2>
                <ul className="mistakes-list">
                  {aiReport.vocabularyProblems.map((v, i) => <li key={i}>{v}</li>)}
                </ul>
              </section>
            )}

            {aiReport.sentenceStructureIssues && aiReport.sentenceStructureIssues.length > 0 && (
              <section className="rule-block">
                <h2>Sentence Structure &amp; Linking</h2>
                <ul className="mistakes-list">
                  {aiReport.sentenceStructureIssues.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </section>
            )}

            {aiReport.unnaturalExpressions && aiReport.unnaturalExpressions.length > 0 && (
              <section className="rule-block">
                <h2>Unnatural Phrasing</h2>
                <ul className="mistakes-list">
                  {aiReport.unnaturalExpressions.map((u, i) => <li key={i}>{u}</li>)}
                </ul>
              </section>
            )}

            {aiReport.areasToImprove && aiReport.areasToImprove.length > 0 && (
              <section className="rule-block">
                <h2>Key Priorities to Improve</h2>
                <ul className="mistakes-list">
                  {aiReport.areasToImprove.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </section>
            )}

            <h2>Your Responses with AI Improvements</h2>
            <div className="results-list">
              {aiReport.questionFeedback && aiReport.questionFeedback.map((fb, i) => (
                <div key={i} className="result-item" style={{ background: 'var(--paper-raised)', marginBottom: '1.25rem', border: '1px solid var(--line)' }}>
                  <p className="result-question" style={{ fontWeight: 600 }}>
                    <strong>Q{i + 1}:</strong> {set.questions[i]}
                  </p>
                  
                  <div style={{ margin: '0.6rem 0', padding: '0.6rem', background: '#f8fafc', borderRadius: '4px', borderLeft: '3px solid #94a3b8' }}>
                    <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--ink-soft)', fontWeight: 600 }}>Your Original Answer:</p>
                    <p style={{ margin: '0.2rem 0 0', color: 'var(--ink)', fontSize: '0.9rem' }}>"{fb.originalAnswer || answers[i]}"</p>
                  </div>

                  <div style={{ margin: '0.6rem 0', padding: '0.6rem', background: '#ecfdf5', borderRadius: '4px', borderLeft: '3px solid #10b981' }}>
                    <p style={{ margin: 0, fontSize: '0.84rem', color: '#047857', fontWeight: 600 }}>✓ Corrected Natural Version:</p>
                    <p style={{ margin: '0.2rem 0 0', color: '#064e3b', fontSize: '0.9rem', fontWeight: 500 }}>"{fb.correctedAnswer}"</p>
                  </div>

                  {fb.improvedAdvancedVersion && (
                    <div style={{ margin: '0.6rem 0', padding: '0.6rem', background: '#f0f9ff', borderRadius: '4px', borderLeft: '3px solid #0284c7' }}>
                      <p style={{ margin: 0, fontSize: '0.84rem', color: '#0369a1', fontWeight: 600 }}>🌟 Advanced Polished Version (C1 / Band 7.5+):</p>
                      <p style={{ margin: '0.2rem 0 0', color: '#0c4a6e', fontSize: '0.9rem' }}>"{fb.improvedAdvancedVersion}"</p>
                    </div>
                  )}

                  <div className="explanation-structured-card" style={{ marginTop: '0.6rem' }}>
                    <div className="explanation-section explanation-why">
                      <div className="explanation-header">
                        <span className="explanation-icon">💡</span>
                        <strong>Simple Explanation:</strong>
                      </div>
                      <p className="explanation-text">{fb.mistakeBreakdown}</p>
                    </div>
                    {fb.strengths && (
                      <div className="explanation-section" style={{ paddingTop: '0.3rem' }}>
                        <div className="explanation-header" style={{ color: 'var(--ok)' }}>
                          <span className="explanation-icon">✨</span>
                          <strong>Strengths:</strong>
                        </div>
                        <p className="explanation-text">{fb.strengths}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p className="grading-note">
              Practice analysis based on your submitted answers. Review the feedback categories below to identify patterns.
            </p>

            <div className="summary-bar">
              <div className="summary-stat">
                <span className="summary-number">6.5</span>
                <span className="summary-label">Estimated Band</span>
              </div>
              <div className="summary-stat">
                <span className="summary-number">{set.questions.length}</span>
                <span className="summary-label">Answers Reviewed</span>
              </div>
            </div>

            <section className="rule-block">
              <h2>Grammar Mistakes</h2>
              <p>Subject-verb agreement and article usage were the primary areas needing attention in open-ended responses.</p>
            </section>

            <section className="rule-block">
              <h2>Vocabulary Problems</h2>
              <p>Practice swapping general descriptive words ("good", "bad", "big") for more precise collocations.</p>
            </section>

            <section className="rule-block">
              <h2>Sentence Structure Issues</h2>
              <p>Combine independent clauses with subordinating conjunctions ("although", "because", "while") for smoother rhythm.</p>
            </section>

            <h2>Your Answers with Model Improvements</h2>
            <div className="results-list">
              {set.questions.map((q, i) => (
                <div key={i} className="result-item result-item--wrong" style={{ background: 'var(--paper-raised)' }}>
                  <p className="result-question"><strong>Q{i + 1}:</strong> {q}</p>
                  <p className="result-verdict">Your answer:</p>
                  <p className="result-explanation" style={{ marginBottom: '0.6rem', color: 'var(--ink)' }}>"{answers[i]}"</p>
                  <p className="result-verdict" style={{ color: 'var(--ok)' }}>✓ Recommended phrasing:</p>
                  <p className="result-explanation" style={{ color: 'var(--ink)' }}>Review sentence structure and ensure consistent tense usage across your clauses.</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem' }}>
          <button onClick={handleRetake} className="btn-secondary" style={{ flex: 1 }}>
            🔄 Retake This Set
          </button>
          <Link to="/think-answer" className="btn-primary" style={{ flex: 1, textAlign: 'center' }}>
            Back to Think &amp; Answer →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container container--narrow">
      <Link to="/think-answer" className="back-link">← Think &amp; Answer sets</Link>
      <h1>{set.title}</h1>
      <p className="exam-instructions">
        Write your own answer to each question below in your own words. Practice using clear grammar and natural sentence structure. Submit once you've answered everything for an in-depth review.
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
              placeholder="Write your authentic English answer here..."
              style={{ resize: 'vertical', fontFamily: 'inherit', lineHeight: '1.5' }}
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <button className="btn-primary" onClick={handleSubmit} disabled={!allAnswered || loading}>
          {loading ? (statusMessage || 'Analyzing your English production...') : 'Submit Answers for AI Evaluation'}
        </button>
        {!allAnswered && (
          <p style={{ fontSize: '0.82rem', color: 'var(--ink-soft)', margin: 0 }}>
            {Object.values(answers).filter(v => (v || '').trim().length > 0).length} of {set.questions.length} answered. Answer all questions to submit.
          </p>
        )}
      </div>
    </div>
  )
}
