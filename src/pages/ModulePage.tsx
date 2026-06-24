import { Navigate, useParams } from 'react-router-dom'
import { lessons, modules } from '../data/mockData'
import { PageHeader } from '../shared/layout/PageHeader'
import { LessonRow } from '../shared/ui/LessonRow'
import { SectionHeading } from '../shared/ui/SectionHeading'

export function ModulePage() {
  const { moduleId } = useParams()
  const currentModule = modules.find((item) => item.id === moduleId)
  const moduleLessons = lessons.filter((lesson) => lesson.moduleId === moduleId)

  if (!currentModule) return <Navigate to="/courses" replace />

  const visibleLessons = moduleLessons.length ? moduleLessons : lessons.slice(0, 2).map((lesson) => ({ ...lesson, moduleId: currentModule.id }))

  return (
    <main className="page page-enter">
      <PageHeader title={currentModule.title} subtitle={currentModule.description} back />
      <div
        className={`module-hero-art ${currentModule.tone}`}
        style={{ backgroundImage: `url("${currentModule.imageUrl}")` }}
      >
        <span className="big-mark">LEX</span><span>{currentModule.eyebrow}</span>
      </div>
      <SectionHeading title="Содержание" action={<span>{visibleLessons.length} темы</span>} />
      <div className="lesson-list">
        {visibleLessons.map((lesson, index) => <LessonRow key={lesson.id} lesson={{ ...lesson, order: `0${index + 1}` }} />)}
      </div>
    </main>
  )
}
