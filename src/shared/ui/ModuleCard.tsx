import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { LearningModule } from '../types/domain'

interface ModuleCardProps {
  module: LearningModule
  compact?: boolean
}

export function ModuleCard({ module, compact = false }: ModuleCardProps) {
  return (
    <Link to={`/courses/${module.id}`} className={`module-card ${compact ? 'compact' : ''}`}>
      <div className={`module-art ${module.tone}`} aria-hidden="true">
        <img className="module-image" src={module.imageUrl} alt="" />
      </div>
      <div className="module-copy">
        <span className="eyebrow">{module.eyebrow}</span>
        <h3>{module.title}</h3>
        {compact ? null : <p>{module.description}</p>}
        <span className="quiet-link">Открыть модуль <ArrowRight size={14} /></span>
      </div>
    </Link>
  )
}
