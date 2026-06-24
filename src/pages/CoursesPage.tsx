import { useQuery } from '@tanstack/react-query'
import { modulesQuery } from '../shared/lib/queryOptions'
import { PageHeader } from '../shared/layout/PageHeader'
import { ModuleCard } from '../shared/ui/ModuleCard'

export function CoursesPage() {
  const { data: modules = [] } = useQuery(modulesQuery)

  return (
    <main className="page page-enter">
      <PageHeader title="Курсы" subtitle="Выберите область и продолжите формировать юридическое мышление." />
      <div className="course-list">
        {modules.map((module) => <ModuleCard key={module.id} module={module} />)}
      </div>
    </main>
  )
}
