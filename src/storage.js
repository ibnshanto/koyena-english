// Simple localStorage-based progress store.
// Structure is designed so it can be swapped for a real database (e.g. Supabase)
// later without changing how the rest of the app calls it.

const KEY = "speakwell_progress";

function readAll() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeAll(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

// data shape: { [topicId]: { [examNumber]: { score, total, answers: [{q,userAnswer,correct,answer,explanation}], completedAt } } }

export function getTopicProgress(topicId) {
  const all = readAll();
  return all[topicId] || {};
}

export function getExamResult(topicId, examNumber) {
  const all = readAll();
  return all[topicId]?.[examNumber] || null;
}

export function saveExamResult(topicId, examNumber, result) {
  const all = readAll();
  if (!all[topicId]) all[topicId] = {};
  all[topicId][examNumber] = { ...result, completedAt: new Date().toISOString() };
  writeAll(all);
}

export function resetExam(topicId, examNumber) {
  const all = readAll();
  if (all[topicId]) {
    delete all[topicId][examNumber];
    writeAll(all);
  }
}

export function getAllProgress() {
  return readAll();
}

export function getTopicStats(topicId, totalExams = 50) {
  const progress = getTopicProgress(topicId);
  const completed = Object.keys(progress).length;
  const scores = Object.values(progress).map(r => r.score / r.total);
  const avg = scores.length ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 100) : 0;
  return { completed, total: totalExams, avgPercent: avg };
}
