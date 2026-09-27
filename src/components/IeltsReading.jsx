import { Link, useParams, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { readingTests } from '../data/readingTests.js'

function normalize(str) {
  return (str || '').trim().toLowerCase().replace(/[.,!?]/g, '')
}

export default function IeltsReading() {
  const { testId } = useParams()
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  if (!testId) {
    return (
      <div className="container container--narrow">
        <Link to="/ielts" className="back-link">← IELTS Practice</Link>
        <h1>Reading Tests</h1>
        <div className="exam-list">
          {readingTests.map(t => (
            <div key={t.id} className="exam-row">
              <span className="exam-name">{t.title}</span>
              <Link to={`/ielts/reading/${t.id}`} className="btn-tiny btn-tiny--primary">Start</Link>
            </div>
          ))}
        </div>
        <p className="grading-note">More reading tests will be added over time, each with mixed question types (multiple choice, True/False/Not Given, summary completion, matching) and realistic question counts, matching real IELTS format.</p>
      </div>
    )
  }

  const test = readingTests.find(t => t.id === Number(testId))
  if (!test) return <Navigate to="/ielts/reading" />

  const handleSubmit = () => setSubmitted(true)

  let globalIndex = 0

  return (
    <div className="container container--narrow">
      <Link to="/ielts/reading" className="back-link">← Reading Tests</Link>
      <h1>{test.title}</h1>

      <div className="reading-passage">
        {test.passage.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
      </div>

      {test.questionGroups.map((group, gi) => (
        <div key={gi} className="rule-block">
          <h2 style={{ fontSize: '1rem' }}>{group.instructions}</h2>

          {group.type === 'summary' && (
            <p className="mistake-note" style={{ marginBottom: '1rem' }}>{group.summaryText}</p>
          )}

          <div className="question-list">
            {group.questions.map((q, qi) => {
              const key = `${gi}-${qi}`
              return (
                <div key={key} className="question-item">
                  <p className="question-text">{q.q}</p>

                  {group.type === 'mcq' && !submitted && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {q.options.map((opt, oi) => (
                        <label key={oi} style={{ fontSize: '0.9rem', cursor: 'pointer' }}>
                          <input
                            type="radio"
                            name={key}
                            checked={answers[key] === opt[0]}
                            onChange={() => setAnswers({ ...answers, [key]: opt[0] })}
                            style={{ marginRight: '0.5rem' }}
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  )}

                  {group.type === 'tfng' && !submitted && (
                    <div style={{ display: 'flex', gap: '0.6rem' }}>
                      {['TRUE', 'FALSE', 'NOT GIVEN'].map(opt => (
                        <button
                          key={opt}
                          className={`btn-tiny ${answers[key] === opt ? 'btn-tiny--primary' : ''}`}
                          onClick={() => setAnswers({ ...answers, [key]: opt })}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {(group.type === 'summary' || (!['mcq', 'tfng'].includes(group.type))) && !submitted && (
                    <input
                      type="text"
                      className="question-input"
                      value={answers[key] || ''}
                      onChange={(e) => setAnswers({ ...answers, [key]: e.target.value })}
                      placeholder="Type your answer"
                    />
                  )}

                  {submitted && (
                    <div className={`result-item ${normalize(answers[key]) === normalize(q.answer) ? 'result-item--correct' : 'result-item--wrong'}`}>
                      <p className="result-verdict">Your answer: {answers[key] || '(blank)'}</p>
                      <p className="result-explanation"><strong>Correct answer:</strong> {q.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {!submitted && <button className="btn-primary" onClick={handleSubmit}>Submit &amp; Check Answers</button>}
    </div>
  )
}
