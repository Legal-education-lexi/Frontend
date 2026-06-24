import { useQuery } from '@tanstack/react-query'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { modulesQuery } from '../../shared/lib/queryOptions'
import { ModuleCard } from '../../shared/ui/ModuleCard'
import { SectionHeading } from '../../shared/ui/SectionHeading'

export function ModuleShowcase() {
  const { data: modules = [] } = useQuery(modulesQuery)

  return (
    <section className="module-showcase">
      <SectionHeading
        title="Модули"
        action={<Link to="/courses">Смотреть все <ChevronRight size={14} /></Link>}
      />
      <div className="module-grid">
        {modules.map((module) => <ModuleCard key={module.id} module={module} compact />)}
      </div>
    </section>
  )
}
