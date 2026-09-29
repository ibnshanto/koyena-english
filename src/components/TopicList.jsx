import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { topics } from '../data/topics.js'
import { getTopicStats } from '../storage.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function TopicList() {
  const { user } = useAuth()
  const [statsMap, setStatsMap] = useState({})

  useEffect(() => {
    let isMounted = true

    if (user?.id) {
      Promise.all(
        topics.map(async (topic) => {
          const stats = await getTopicStats(user.id, topic.id)
          return [topic.id, stats]
        })
      ).then((entries) => {
        if (isMounted) {
          setStatsMap(Object.fromEntries(entries))
        }
      }).catch((err) => {
        console.error('Error fetching topic stats:', err)
      })
    } else {
      // Clear progress state when logged out or guest
      setStatsMap({})
    }

    return () => {
      isMounted = false
    }
  }, [user?.id])

  return (
    <div className="container">
      <div className="hero">
        <h1>Grammar, mastered one topic at a time.</h1>
        <p>Read the lesson, then test yourself with real practice exams — with an explanation for every answer.</p>
      </div>

      {/* IELTS Practice card hidden until admin panel is built */}

      <div className="topic-grid">
        {topics.map(topic => {
          const stats = statsMap[topic.id] || { completed: 0, total: 50, avgPercent: 0 }
          const percent = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0

          return (
            <Link to={`/topic/${topic.id}`} key={topic.id} className={`topic-card ${!topic.hasContent ? 'topic-card--soon' : ''}`}>
              <div className="topic-card-top">
                <h3>{topic.name}</h3>
                {!topic.hasContent && <span className="badge">Coming soon</span>}
              </div>
              <p className="topic-subtitle">{topic.subtitle}</p>
              {topic.hasContent && (
                <div className="topic-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${percent}%` }} />
                  </div>
                  <span className="progress-label">{stats.completed}/{stats.total} exams</span>
                </div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
