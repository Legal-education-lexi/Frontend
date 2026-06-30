import { ArrowRight, CheckCircle2, Clock3, Layers3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { dailyCase } from '../../data/mockData'

const statIcons = {
  duration: Clock3,
  cards: Layers3,
  case: CheckCircle2,
}

export function DailyCaseCard() {
  return (
    <Link
      to={`/courses/${dailyCase.moduleId}/${dailyCase.lessonId}`}
      className="daily-case"
      style={{ backgroundImage: `url("${dailyCase.backgroundImageUrl}")` }}
    >
      <div className="case-copy">
        {dailyCase.label ? <span className="eyebrow">{dailyCase.label}</span> : null}
        <h2>
          {dailyCase.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}
        </h2>
        <span className="case-meta" aria-label={dailyCase.stats.map((stat) => stat.label).join(', ')}>
          {dailyCase.stats.map((stat) => {
            const Icon = statIcons[stat.id as keyof typeof statIcons]

            return (
              <span className="case-stat" key={stat.id}>
                <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                {stat.label}
              </span>
            )
          })}
        </span>
        <span className="primary-button">{dailyCase.actionLabel} <ArrowRight size={20} /></span>
      </div>
    </Link>
  )
}
