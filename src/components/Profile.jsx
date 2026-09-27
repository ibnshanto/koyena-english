import { Link } from 'react-router-dom'
import { topics } from '../data/topics.js'
import { getTopicStats, getAllProgress } from '../storage.js'

export default function Profile() {
  const allProgress = getAllProgress()
  const contentTopics = topics.filter(t => t.hasContent)

  const topicStats = contentTopics.map(t => ({
    ...t,
    stats: getTopicStats(t.id)
  }))

  const totalCompleted = topicStats.reduce((sum, t) => sum + t.stats.completed, 0)
  const startedTopics = topicStats.filter(t => t.stats.completed > 0)
  const overallAvg = startedTopics.length
    ? Math.round(startedTopics.reduce((sum, t) => sum + t.stats.avgPercent, 0) / startedTopics.length)
    : 0

  const weakestTopic = [...startedTopics].sort((a, b) => a.stats.avgPercent - b.stats.avgPercent)[0]

  return (
    <div className="container container--narrow">
      <h1>My Progress</h1>
      <p className="profile-sub">{startedTopics.length} of {topics.length} topics started · {totalCompleted} exams completed overall</p>

      <div className="summary-bar">
        <div className="summary-stat">
          <span className="summary-number">{overallAvg}%</span>
          <span className="summary-label">Overall accuracy</span>
        </div>
        <div className="summary-stat">
          <span className="summary-number">{totalCompleted}</span>
          <span className="summary-label">Exams completed</span>
        </div>
        <div className="summary-stat">
          <span className="summary-number">{startedTopics.length}</span>
          <span className="summary-label">Topics in progress</span>
        </div>
      </div>

      <h2 className="section-title">Topic breakdown</h2>
      <div className="breakdown-list">
        {topicStats.map(t => (
          <Link to={`/topic/${t.id}/exams`} key={t.id} className="breakdown-item">
            <div className="breakdown-top">
              <span>{t.name}</span>
              <span className="breakdown-meta">
                {t.stats.completed > 0 ? `${t.stats.completed}/${t.stats.total} exams · ${t.stats.avgPercent}% avg` : 'Not started'}
              </span>
            </div>
            {t.stats.completed > 0 && (
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${t.stats.avgPercent}%`,
                    background: t.stats.avgPercent >= 75 ? 'var(--ok)' : t.stats.avgPercent >= 50 ? 'var(--warn)' : 'var(--bad)'
                  }}
                />
              </div>
            )}
          </Link>
        ))}
      </div>

      {weakestTopic && (
        <div className="focus-box">
          <h3>Recommended focus</h3>
          <p><strong>{weakestTopic.name}</strong> — weakest topic ({weakestTopic.stats.avgPercent}%)</p>
        </div>
      )}
    </div>
  )
}
