import { Link, useParams, Navigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import { listeningTests } from '../data/listeningTests.js'

function normalize(str) {
  return (str || '').trim().toLowerCase().replace(/[.,!?]/g, '')
}

export default function IeltsListening() {
  const { testId } = useParams()
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  if (!testId) {
    return (
      <div className="container container--narrow">
        <Link to="/ielts" className="back-link">← IELTS Practice</Link>
        <h1>Listening Tests</h1>
        <div className="exam-list">
          {listeningTests.map(t => (
            <div key={t.id} className="exam-row">
              <span className="exam-name">{t.title}</span>
              <Link to={`/ielts/listening/${t.id}`} className="btn-tiny btn-tiny--primary">Start</Link>
            </div>
          ))}
        </div>
        <p className="grading-note">Audio is read aloud using your browser's built-in voice — a free but limited option, so it sounds robotic and uses one voice for all speakers. More natural, multi-voice audio requires a paid AI voice service connected via a backend.</p>
      </div>
    )
  }

  const test = listeningTests.find(t => t.id === Number(testId))
  if (!test) return <Navigate to="/ielts/listening" />

  const speak = () => {
    if (!('speechSynthesis' in window)) {
      alert('Sorry, your browser doesn\'t support text-to-speech. Try Chrome or Edge.')
      return
    }
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(test.script)
    utterance.rate = 0.95
    utterance.onstart = () => setPlaying(true)
    utterance.onend = () => { setPlaying(false); setHasPlayed(true) }
    window.speechSynthesis.speak(utterance)
  }

  const stop = () => {
    window.speechSynthesis.cancel()
    setPlaying(false)
  }

  const handleSubmit = () => setSubmitted(true)

  return (
    <div className="container container--narrow">
      <Link to="/ielts/listening" className="back-link">← Listening Tests</Link>
      <h1>{test.title}</h1>

      <div className="audio-player">
        {!playing ? (
          <button className="btn-primary" onClick={speak}>{hasPlayed ? '▶ Play again' : '▶ Play audio'}</button>
        ) : (
          <button className="btn-secondary" onClick={stop}>⏸ Stop</button>
        )}
        <p className="audio-hint">Listen carefully — in a real exam you'd only hear this once. Then answer the questions below.</p>
      </div>

      {test.questionGroups.map((group, gi) => (
        <div key={gi} className="rule-block">
          <h2 style={{ fontSize: '1rem' }}>{group.instructions}</h2>
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

                  {group.type !== 'mcq' && !submitted && (
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

      {submitted && (
        <details className="transcript-reveal">
          <summary>Show full transcript</summary>
          <div className="reading-passage">
            {test.script.split('\n\n').map((line, i) => <p key={i}>{line}</p>)}
          </div>
        </details>
      )}
    </div>
  )
}
