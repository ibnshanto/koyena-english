import { Link } from 'react-router-dom'
import { thinkAnswerSets } from '../data/thinkAnswerQuestions.js'

export default function ThinkAnswerList() {
  return (
    <div className="container container--narrow">
      <h1>Think &amp; Answer</h1>
      <p className="lesson-intro">
        Real questions, your own words. No hints, no corrections while you write — just think and produce English,
        the way you'd need to in a real conversation or exam. Each set has 6 questions, mixed from easy everyday
        topics to IELTS-style arguments. After you finish, you'll get a full breakdown of your grammar, vocabulary,
        and sentence structure, plus a corrected version of every answer.
      </p>

      <div className="exam-list">
        {thinkAnswerSets.map(set => (
          <div key={set.id} className="exam-row">
            <span className="exam-name">{set.title}</span>
            <Link to={`/think-answer/${set.id}`} className="btn-tiny btn-tiny--primary">Start</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
