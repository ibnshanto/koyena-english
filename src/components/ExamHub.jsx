import { useParams, Link, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTopic } from '../data/topics.js'
import { getTopicProgress, getTopicStats, resetExam } from '../storage.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function ExamHub() {
  const { topicId } = useParams()
  const topic = getTopic(topicId)
  const { user } = useAuth()

  const [progress, setProgress] = useState({})
  const [stats, setStats] = useState({ completed: 0, total: 50, avgPercent: 0 })
  const [loading, setLoading] = useState(false)

  const reloadData = async () => {
    if (!user?.id) {
      setProgress({})
      setStats({ completed: 0, total: 50, avgPercent: 0 })
      return
    }
    setLoading(true)
    try {
      const [p, s] = await Promise.all([
        getTopicProgress(user.id, topicId),
        getTopicStats(user.id, topicId)
      ])
      setProgress(p || {})
      setStats(s || { completed: 0, total: 50, avgPercent: 0 })
    } catch (err) {
      console.error('Error loading exam hub data:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    reloadData()
  }, [topicId, user?.id])

  if (!topic) return <Navigate to="/" />

  const examNumbers = Array.from({ length: 50 }, (_, i) => i + 1)

  const handleUncheck = async (examNum) => {
    if (!user?.id) return
    if (confirm(`Retake Exam ${examNum}? This clears your previous score for this exam.`)) {
      await resetExam(user.id, topicId, examNum)
      await reloadData()
    }
  }

  // find weak spots: explanations from wrong answers across completed exams
  const weakSpots = {}
  Object.values(progress).forEach(result => {
    result.answers?.forEach(a => {
      if (!a.correct && a.rawExplanation) {
        weakSpots[a.rawExplanation] = (weakSpots[a.rawExplanation] || 0) + 1
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
          {topWeakSpots.map(([explanation], i) => (
            <div key={i} className="weak-spot-item">{explanation}</div>
          ))}
        </div>
      )}

      {loading && (
        <p style={{ textAlign: 'center', color: 'var(--ink-soft)', margin: '1rem 0' }}>
          Loading your exams...
        </p>
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
                  onChange={() => (done ? handleUncheck(num) : null)}
                  disabled={!user || !done}
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
