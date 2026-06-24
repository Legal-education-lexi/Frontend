import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { dailyCase } from '../../data/mockData'

export function DailyCaseCard() {
  return (
    <Link
      to={`/courses/${dailyCase.moduleId}/${dailyCase.lessonId}`}
      className="daily-case"
      style={{ backgroundImage: `url("${dailyCase.backgroundImageUrl}")` }}
    >
      <div className="case-copy">
        <span className="eyebrow">{dailyCase.label}</span>
        <h2>
          {dailyCase.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}
        </h2>
        <span className="case-meta">Сегодня · 16 минут</span>
        <span className="primary-button">Продолжить <ArrowRight size={17} /></span>
      </div>
    </Link>
  )
}
