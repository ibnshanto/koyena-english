import { Link } from 'react-router-dom'
import { topics } from '../data/topics.js'
import { getTopicStats } from '../storage.js'

export default function TopicList() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Grammar, mastered one topic at a time.</h1>
        <p>Read the lesson, then test yourself with real practice exams — with an explanation for every answer.</p>
      </div>

      {/* IELTS Practice card hidden until admin panel is built */}

      <div className="topic-grid">
        {topics.map(topic => {
          const stats = getTopicStats(topic.id)
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
                    <div className="progress-fill" style={{ width: `${(stats.completed / stats.total) * 100}%` }} />
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
