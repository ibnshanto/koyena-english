import { useParams, Link, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTopic } from '../data/topics.js'
import examsData from '../data/exams.json'
import { getExamResult, saveExamResult } from '../storage.js'

function normalize(str) {
  return str.trim().toLowerCase().replace(/[.,!?]/g, '')
}

export default function TakeExam() {
  const { topicId, examNumber } = useParams()
  const topic = getTopic(topicId)
  const questions = examsData[topicId]?.[examNumber] || []

  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState(null)

  useEffect(() => {
    const existing = getExamResult(topicId, examNumber)
    if (existing) {
      setResult(existing)
      setSubmitted(true)
    } else {
      setAnswers({})
      setSubmitted(false)
      setResult(null)
    }
  }, [topicId, examNumber])

  if (!topic) return <Navigate to="/" />
  if (questions.length === 0) {
    return (
      <div className="container container--narrow">
        <p className="soon-message">This exam's questions haven't been loaded into the demo yet. Only Exams 1–50 for Articles and Subject-Verb Agreement are wired up with real data in this scaffold — the full 50 exams per topic follow the same JSON structure and can be added the same way.</p>
        <Link to={`/topic/${topicId}/exams`} className="btn-secondary">← Back to exam list</Link>
      </div>
    )
  }

  const handleSubmit = () => {
    let score = 0
    const gradedAnswers = questions.map((q, i) => {
      const userAnswer = answers[i] || ''
      const correct = normalize(userAnswer) === normalize(q.answer)
      if (correct) score++
      return { q: q.q, userAnswer, answer: q.answer, correct, explanation: q.explanation }
    })
    const newResult = { score, total: questions.length, answers: gradedAnswers }
    saveExamResult(topicId, examNumber, newResult)
    setResult(newResult)
    setSubmitted(true)
  }

  if (submitted && result) {
    return (
      <div className="container container--narrow">
        <Link to={`/topic/${topicId}/exams`} className="back-link">← Exam list</Link>
        <div className="results-header">
          <div className="results-score">{result.score}/{result.total}</div>
          <div className="results-sub">{topic.name} — Exam {examNumber} — {Math.round((result.score / result.total) * 100)}% correct</div>
        </div>

        {topic.transformFormat && (
          <p className="grading-note">Note: this topic's grading currently checks for an exact match to the model answer. Full AI-based grading (which accepts valid rephrasing) is planned but not yet connected — read the explanation below each question, since your answer may be correct even if marked wrong here.</p>
        )}

        <div className="results-list">
          {result.answers.map((a, i) => (
            <div key={i} className={`result-item ${a.correct ? 'result-item--correct' : 'result-item--wrong'}`}>
              <p className="result-question">{i + 1}. {a.q}</p>
              {a.correct ? (
                <p className="result-verdict">✓ Your answer: "{a.userAnswer}" — Correct</p>
              ) : (
                <p className="result-verdict">✗ Your answer: "{a.userAnswer || '(blank)'}" — Correct answer: "{a.answer}"</p>
              )}
              <p className="result-explanation">{a.explanation}</p>
            </div>
          ))}
        </div>

        <Link to={`/topic/${topicId}/exams`} className="btn-primary">Back to Exam Hub</Link>
      </div>
    )
  }

  return (
    <div className="container container--narrow">
      <Link to={`/topic/${topicId}/exams`} className="back-link">← Exam list</Link>
      <h1>{topic.name} — Exam {examNumber}</h1>
      <p className="exam-instructions">
        {topic.transformFormat
          ? "Read each sentence and rewrite it fully in the box below, then submit at the end. You'll see full explanations after submitting."
          : "Fill in each blank, then submit at the end. You'll see full explanations after submitting."}
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
            />
          </div>
        ))}
      </div>

      <button className="btn-primary" onClick={handleSubmit}>Submit Exam</button>
    </div>
  )
}
