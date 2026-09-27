import { Link, useParams, Navigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import { speakingTests } from '../data/speakingTests.js'

function useSpeechRecognition() {
  const recognitionRef = useRef(null)
  const [listening, setListening] = useState(false)
  const [supported] = useState(() => 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window)

  const start = (onResult) => {
    if (!supported) return
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = false
    recognition.lang = 'en-US'
    let finalTranscript = ''
    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript + ' '
          onResult(finalTranscript.trim())
        }
      }
    }
    recognition.onend = () => setListening(false)
    recognitionRef.current = recognition
    recognition.start()
    setListening(true)
  }

  const stop = () => {
    recognitionRef.current?.stop()
    setListening(false)
  }

  return { start, stop, listening, supported }
}

export default function IeltsSpeaking() {
  const { testId } = useParams()
  const [answers, setAnswers] = useState({ part1: [], part2: '', part3: [] })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { start, stop, listening, supported } = useSpeechRecognition()
  const [activeField, setActiveField] = useState(null)

  if (!testId) {
    return (
      <div className="container container--narrow">
        <Link to="/ielts" className="back-link">← IELTS Practice</Link>
        <h1>Speaking Tests</h1>
        <div className="exam-list">
          {speakingTests.map(t => (
            <div key={t.id} className="exam-row">
              <span className="exam-name">{t.title}</span>
              <Link to={`/ielts/speaking/${t.id}`} className="btn-tiny btn-tiny--primary">Start</Link>
            </div>
          ))}
        </div>
        {!supported && <p className="grading-note">Your browser doesn't support speech recognition — try Chrome for the microphone feature. You can still type your answers instead.</p>}
      </div>
    )
  }

  const test = speakingTests.find(t => t.id === Number(testId))
  if (!test) return <Navigate to="/ielts/speaking" />

  const handleMicToggle = (fieldKey, index = null) => {
    if (listening && activeField === fieldKey + index) {
      stop()
      setActiveField(null)
      return
    }
    setActiveField(fieldKey + index)
    start((text) => {
      if (fieldKey === 'part1' || fieldKey === 'part3') {
        setAnswers(prev => {
          const arr = [...prev[fieldKey]]
          arr[index] = text
          return { ...prev, [fieldKey]: arr }
        })
      } else {
        setAnswers(prev => ({ ...prev, part2: text }))
      }
    })
  }

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1400)
  }

  const MicButton = ({ fieldKey, index }) => {
    const isActive = listening && activeField === (fieldKey + index)
    return supported ? (
      <button className={`btn-tiny ${isActive ? 'btn-tiny--primary' : ''}`} onClick={() => handleMicToggle(fieldKey, index)}>
        {isActive ? '⏺ Recording... click to stop' : '🎤 Speak your answer'}
      </button>
    ) : null
  }

  if (submitted) {
    return (
      <div className="container container--narrow">
        <Link to="/ielts/speaking" className="back-link">← Speaking Tests</Link>
        <p className="grading-note">This is a simulated example of AI feedback. Once connected to a live AI backend, your actual transcribed speech will be analyzed for fluency, vocabulary, grammar, and pronunciation patterns (pronunciation scoring needs a specialized speech-analysis API beyond basic transcription).</p>

        <h1>Feedback — {test.title}</h1>

        <div className="summary-bar">
          <div className="summary-stat"><span className="summary-number">6.0</span><span className="summary-label">Overall band (example)</span></div>
        </div>

        <section className="rule-block">
          <h2>Fluency &amp; Coherence</h2>
          <p>Example: your answers flow reasonably well, though there are some noticeable pauses when moving between ideas in Part 3. Try using more linking phrases like "on the other hand" or "as a result."</p>
        </section>

        <section className="rule-block">
          <h2>Vocabulary</h2>
          <p>Example: good range of everyday vocabulary; for a higher band, aim for more topic-specific words when discussing abstract ideas in Part 3.</p>
        </section>

        <section className="rule-block">
          <h2>Grammar</h2>
          <p>Example: mostly accurate simple and complex sentences, with occasional article and tense errors — consistent with patterns seen in your grammar exam results.</p>
        </section>

        <h2>Your Transcribed Answers</h2>
        {test.part1.questions.map((q, i) => (
          <div key={i} className="result-item result-item--wrong" style={{ marginBottom: '0.6rem' }}>
            <p className="result-question"><strong>Part 1:</strong> {q}</p>
            <p className="result-explanation">{answers.part1[i] || '(no answer recorded)'}</p>
          </div>
        ))}
        <div className="result-item result-item--wrong" style={{ marginBottom: '0.6rem' }}>
          <p className="result-question"><strong>Part 2:</strong> {test.part2.prompt}</p>
          <p className="result-explanation">{answers.part2 || '(no answer recorded)'}</p>
        </div>
        {test.part3.questions.map((q, i) => (
          <div key={i} className="result-item result-item--wrong" style={{ marginBottom: '0.6rem' }}>
            <p className="result-question"><strong>Part 3:</strong> {q}</p>
            <p className="result-explanation">{answers.part3[i] || '(no answer recorded)'}</p>
          </div>
        ))}

        <Link to="/ielts/speaking" className="btn-primary" style={{ marginTop: '1rem' }}>Back to Speaking Tests</Link>
      </div>
    )
  }

  return (
    <div className="container container--narrow">
      <Link to="/ielts/speaking" className="back-link">← Speaking Tests</Link>
      <h1>{test.title}</h1>
      {!supported && <p className="grading-note">Microphone speech-to-text isn't supported in this browser — try Chrome. You can type your answers below instead.</p>}

      <section className="rule-block">
        <h2>{test.part1.title}</h2>
        {test.part1.questions.map((q, i) => (
          <div key={i} className="question-item" style={{ marginBottom: '1rem' }}>
            <p className="question-text">{q}</p>
            <MicButton fieldKey="part1" index={i} />
            <textarea className="question-input" rows={2} style={{ marginTop: '0.5rem' }}
              value={answers.part1[i] || ''}
              onChange={(e) => { const arr = [...answers.part1]; arr[i] = e.target.value; setAnswers({ ...answers, part1: arr }) }}
              placeholder="Your answer (spoken or typed)" />
          </div>
        ))}
      </section>

      <section className="rule-block">
        <h2>{test.part2.title}</h2>
        <p>{test.part2.prompt}</p>
        <MicButton fieldKey="part2" index="" />
        <textarea className="question-input" rows={5} style={{ marginTop: '0.5rem' }}
          value={answers.part2}
          onChange={(e) => setAnswers({ ...answers, part2: e.target.value })}
          placeholder="Your answer (spoken or typed)" />
      </section>

      <section className="rule-block">
        <h2>{test.part3.title}</h2>
        {test.part3.questions.map((q, i) => (
          <div key={i} className="question-item" style={{ marginBottom: '1rem' }}>
            <p className="question-text">{q}</p>
            <MicButton fieldKey="part3" index={i} />
            <textarea className="question-input" rows={2} style={{ marginTop: '0.5rem' }}
              value={answers.part3[i] || ''}
              onChange={(e) => { const arr = [...answers.part3]; arr[i] = e.target.value; setAnswers({ ...answers, part3: arr }) }}
              placeholder="Your answer (spoken or typed)" />
          </div>
        ))}
      </section>

      <button className="btn-primary" onClick={handleSubmit} disabled={loading}>
        {loading ? 'Analyzing your speaking…' : 'Submit for Feedback'}
      </button>
    </div>
  )
}
