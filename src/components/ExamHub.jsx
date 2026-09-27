import { useParams, Link, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTopic } from '../data/topics.js'
import { getTopicProgress, getTopicStats, resetExam } from '../storage.js'

export default function ExamHub() {
  const { topicId } = useParams()
  const topic = getTopic(topicId)
  const [progress, setProgress] = useState({})
  const [stats, setStats] = useState({ completed: 0, total: 50, avgPercent: 0 })

  useEffect(() => {
    setProgress(getTopicProgress(topicId))
    setStats(getTopicStats(topicId))
  }, [topicId])

  if (!topic) return <Navigate to="/" />

  const examNumbers = Array.from({ length: 50 }, (_, i) => i + 1)

  const handleUncheck = (examNum) => {
    if (confirm(`Retake Exam ${examNum}? This clears your previous score for this exam.`)) {
      resetExam(topicId, examNum)
      setProgress(getTopicProgress(topicId))
      setStats(getTopicStats(topicId))
    }
  }

  // find weak spots: explanations from wrong answers across completed exams
  const weakSpots = {}
  Object.values(progress).forEach(result => {
    result.answers?.forEach(a => {
      if (!a.correct) {
        weakSpots[a.explanation] = (weakSpots[a.explanation] || 0) + 1
      }
    })
  })
  const topWeakSpots = Object.entries(weakSpots).sort((a, b) => b[1] - a[1]).slice(0, 3)

  return (
    <div className="container container--narrow">
      <Link to={`/topic/${topicId}`} className="back-link">← {topic.name} lesson</Link>
      <h1>{topic.name} — Exam Hub</h1>

      <div className="summary-bar">
        <div className="summary-stat">
          <span className="summary-number">{stats.completed}/{stats.total}</span>
          <span className="summary-label">Exams completed</span>
        </div>
        <div className="summary-stat">
          <span className="summary-number">{stats.avgPercent}%</span>
          <span className="summary-label">Average score</span>
        </div>
      </div>

      {topWeakSpots.length > 0 && (
        <div className="weak-spots">
          <h3>Your weak spots</h3>
          {topWeakSpots.map(([explanation, count], i) => (
            <div key={i} className="weak-spot-item">{explanation}</div>
          ))}
        </div>
      )}

      <div className="exam-list">
        {examNumbers.map(num => {
          const result = progress[num]
          const done = !!result
          return (
            <div key={num} className={`exam-row ${done ? 'exam-row--done' : ''}`}>
              <label className="exam-checkbox">
                <input
                  type="checkbox"
                  checked={done}
                  onChange={() => done ? handleUncheck(num) : null}
                  readOnly={!done}
                />
                <span className="exam-name">Exam {num}</span>
              </label>
              {done ? (
                <div className="exam-row-right">
                  <span className="exam-score">{result.score}/{result.total}</span>
                  <Link to={`/topic/${topicId}/exam/${num}`} className="btn-tiny">Review</Link>
                </div>
              ) : (
                <Link to={`/topic/${topicId}/exam/${num}`} className="btn-tiny btn-tiny--primary">Start</Link>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
