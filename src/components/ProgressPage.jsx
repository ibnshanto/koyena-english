import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { topics } from '../data/topics.js'
import { getTopicStats } from '../storage.js'
import { useAuth } from '../context/AuthContext.jsx'
import { useT } from '../i18n.js'

export default function ProgressPage() {
  const { user, openAuthModal } = useAuth()
  const { t } = useT()

  const [loading, setLoading] = useState(true)
  const [topicStats, setTopicStats] = useState([])

  useEffect(() => {
    let isMounted = true

    if (!user) {
      setTopicStats([])
      setLoading(false)
      return
    }

    setLoading(true)
    const contentTopics = topics.filter(t => t.hasContent)

    // Load progress asynchronously from Supabase
    Promise.all(
      contentTopics.map(async (topic) => {
        const stats = await getTopicStats(user.id, topic.id)
        return {
          ...topic,
          stats
        }
      })
    ).then((results) => {
      if (isMounted) {
        setTopicStats(results)
        setLoading(false)
      }
    }).catch((err) => {
      console.error('Failed to load topic stats:', err)
      if (isMounted) setLoading(false)
    })

    return () => {
      isMounted = false
    }
  }, [user])

  if (!user) {
    return (
      <div className="container container--narrow" style={{ marginTop: '3rem', textAlign: 'center' }}>
        <div className="guest-prompt-card">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
          <h2>{t('myProgress')}</h2>
          <p style={{ margin: '0.5rem 0 1.5rem', color: 'var(--ink-soft)' }}>
            {t('guestProgressPrompt')}
          </p>
          <button type="button" onClick={openAuthModal} className="btn-primary">
            {t('signIn')}
          </button>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="container container--narrow" style={{ marginTop: '3rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--ink-soft)' }}>{t('loadingProgress')}</p>
      </div>
    )
  }

  const totalCompleted = topicStats.reduce((sum, t) => sum + (t.stats?.completed || 0), 0)
  const startedTopics = topicStats.filter(t => (t.stats?.completed || 0) > 0)
  const overallAvg = startedTopics.length
    ? Math.round(startedTopics.reduce((sum, t) => sum + t.stats.avgPercent, 0) / startedTopics.length)
    : 0

  const weakestTopic = [...startedTopics].sort((a, b) => a.stats.avgPercent - b.stats.avgPercent)[0]

  return (
    <div className="container container--narrow" style={{ marginTop: '2rem' }}>
      <h1>{t('myProgress')}</h1>
      <p className="profile-sub">
        {startedTopics.length} of {topics.length} topics started · {totalCompleted} {t('exams')} completed overall
      </p>

      <div className="summary-bar">
        <div className="summary-stat">
          <span className="summary-number">{overallAvg}%</span>
          <span className="summary-label">{t('overallAccuracy')}</span>
        </div>
        <div className="summary-stat">
          <span className="summary-number">{totalCompleted}</span>
          <span className="summary-label">{t('examsCompleted')}</span>
        </div>
        <div className="summary-stat">
          <span className="summary-number">{startedTopics.length}</span>
          <span className="summary-label">{t('topicsInProgress')}</span>
        </div>
      </div>

      <h2 className="section-title">{t('topicBreakdown')}</h2>
      <div className="breakdown-list">
        {topicStats.map(topic => {
          const s = topic.stats || { completed: 0, total: 50, avgPercent: 0 }
          return (
            <Link to={`/topic/${topic.id}/exams`} key={topic.id} className="breakdown-item">
              <div className="breakdown-top">
                <span>{topic.name}</span>
                <span className="breakdown-meta">
                  {s.completed > 0 ? `${s.completed}/${s.total} ${t('exams')} · ${s.avgPercent}% ${t('avg')}` : t('notStarted')}
                </span>
              </div>
              {s.completed > 0 && (
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${s.avgPercent}%`,
                      background: s.avgPercent >= 75 ? 'var(--ok)' : s.avgPercent >= 50 ? 'var(--warn)' : 'var(--bad)'
                    }}
                  />
                </div>
              )}
            </Link>
          )
        })}
      </div>

      {weakestTopic && (
        <div className="focus-box">
          <h3>{t('recommendedFocus')}</h3>
          <p>
            <strong>{weakestTopic.name}</strong> — {t('weakestTopicText')} ({weakestTopic.stats.avgPercent}%)
          </p>
        </div>
      )}
    </div>
  )
}
