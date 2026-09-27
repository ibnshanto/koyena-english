import { Link } from 'react-router-dom'

export default function IeltsHub() {
  return (
    <div className="container container--narrow">
      <h1>IELTS Practice</h1>
      <p className="lesson-intro">
        Full-length practice tests in the same style and format as real IELTS exams — original content written
        to match that level and structure. Writing and Speaking are reviewed by AI for feedback; Reading and
        Listening are self-check with model answers.
      </p>

      <div className="topic-grid">
        <Link to="/ielts/reading" className="topic-card">
          <h3>Reading</h3>
          <p className="topic-subtitle">Passages with comprehension questions</p>
        </Link>
        <Link to="/ielts/listening" className="topic-card">
          <h3>Listening</h3>
          <p className="topic-subtitle">Audio conversations with questions (uses your browser's built-in voice)</p>
        </Link>
        <Link to="/ielts/writing" className="topic-card">
          <h3>Writing</h3>
          <p className="topic-subtitle">Task 1 &amp; Task 2 — AI feedback on your writing</p>
        </Link>
        <Link to="/ielts/speaking" className="topic-card">
          <h3>Speaking</h3>
          <p className="topic-subtitle">Parts 1-3 — AI feedback on your spoken answers</p>
        </Link>
      </div>
    </div>
  )
}
