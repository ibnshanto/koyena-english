import { supabase } from './supabaseClient.js'

/**
 * Supabase-backed asynchronous storage for Koyena English.
 * Guests have no progress saved (all functions return empty/null if userId is missing).
 * Logged-in users' exam results are synced to public.exam_results.
 */

// Returns progress map for a topic: { [examNumber]: { score, total, answers, completedAt } }
export async function getTopicProgress(userId, topicId) {
  if (!userId) return {}

  try {
    const { data, error } = await supabase
      .from('exam_results')
      .select('exam_number, score, total, answers, completed_at')
      .eq('user_id', userId)
      .eq('topic_id', topicId)

    if (error) {
      console.warn('Error fetching topic progress:', error.message)
      return {}
    }

    const progress = {}
    if (data) {
      data.forEach(row => {
        progress[row.exam_number] = {
          score: row.score,
          total: row.total,
          answers: row.answers || [],
          completedAt: row.completed_at
        }
      })
    }
    return progress
  } catch (err) {
    console.error('getTopicProgress exception:', err)
    return {}
  }
}

// Returns a single exam result: { score, total, answers, completedAt } or null
export async function getExamResult(userId, topicId, examNumber) {
  if (!userId) return null

  try {
    const { data, error } = await supabase
      .from('exam_results')
      .select('score, total, answers, completed_at')
      .eq('user_id', userId)
      .eq('topic_id', topicId)
      .eq('exam_number', Number(examNumber))
      .maybeSingle()

    if (error) {
      console.warn('Error fetching exam result:', error.message)
      return null
    }

    if (!data) return null

    return {
      score: data.score,
      total: data.total,
      answers: data.answers || [],
      completedAt: data.completed_at
    }
  } catch (err) {
    console.error('getExamResult exception:', err)
    return null
  }
}

// Saves exam result for a logged-in user using upsert
export async function saveExamResult(userId, topicId, examNumber, result) {
  if (!userId) {
    // Guest mode: do not save anything
    return null
  }

  const completedAt = new Date().toISOString()
  try {
    const { data, error } = await supabase
      .from('exam_results')
      .upsert({
        user_id: userId,
        topic_id: topicId,
        exam_number: Number(examNumber),
        score: result.score,
        total: result.total,
        answers: result.answers || [],
        completed_at: completedAt
      }, { onConflict: 'user_id,topic_id,exam_number' })

    if (error) {
      console.error('Error saving exam result to Supabase:', error.message)
      return null
    }

    return { ...result, completedAt }
  } catch (err) {
    console.error('saveExamResult exception:', err)
    return null
  }
}

// Resets/deletes an exam record
export async function resetExam(userId, topicId, examNumber) {
  if (!userId) return

  try {
    const { error } = await supabase
      .from('exam_results')
      .delete()
      .eq('user_id', userId)
      .eq('topic_id', topicId)
      .eq('exam_number', Number(examNumber))

    if (error) {
      console.error('Error deleting exam result:', error.message)
    }
  } catch (err) {
    console.error('resetExam exception:', err)
  }
}

// Returns all progress across all topics for the user:
// { [topicId]: { [examNumber]: { score, total, answers, completedAt } } }
export async function getAllProgress(userId) {
  if (!userId) return {}

  try {
    const { data, error } = await supabase
      .from('exam_results')
      .select('topic_id, exam_number, score, total, answers, completed_at')
      .eq('user_id', userId)

    if (error) {
      console.warn('Error fetching all progress:', error.message)
      return {}
    }

    const all = {}
    if (data) {
      data.forEach(row => {
        if (!all[row.topic_id]) all[row.topic_id] = {}
        all[row.topic_id][row.exam_number] = {
          score: row.score,
          total: row.total,
          answers: row.answers || [],
          completedAt: row.completed_at
        }
      })
    }
    return all
  } catch (err) {
    console.error('getAllProgress exception:', err)
    return {}
  }
}

// Calculates topic stats: { completed, total, avgPercent }
export async function getTopicStats(userId, topicId, totalExams = 50) {
  if (!userId) {
    return { completed: 0, total: totalExams, avgPercent: 0 }
  }

  const progress = await getTopicProgress(userId, topicId)
  const completed = Object.keys(progress).length
  const scores = Object.values(progress).map(r => r.score / r.total)
  const avg = scores.length
    ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 100)
    : 0

  return { completed, total: totalExams, avgPercent: avg }
}
