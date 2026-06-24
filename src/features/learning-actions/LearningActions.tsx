import { ArrowRight, BookOpen, FileCheck2, Scale } from 'lucide-react'
import { Link } from 'react-router-dom'
import { dailyCase } from '../../data/mockData'

const learningActions = [
  { title: 'Чтение', description: 'Освойте основу', icon: BookOpen, to: '/courses' },
  { title: 'Решение', description: 'Разберите кейс', icon: Scale, to: `/courses/${dailyCase.moduleId}/${dailyCase.lessonId}` },
  { title: 'Позиция', description: 'Сформулируйте вывод', icon: FileCheck2, to: '/notes' },
] as const

export function LearningActions() {
  return (
    <section className="action-grid" aria-label="Направления обучения">
      {learningActions.map(({ title, description, icon: Icon, to }) => (
        <Link to={to} className="action-card" key={title}>
          <Icon size={24} strokeWidth={1.25} />
          <div><h3>{title}</h3><p>{description}</p></div>
          <ArrowRight className="action-arrow" size={15} />
        </Link>
      ))}
    </section>
  )
}
