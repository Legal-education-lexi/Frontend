import { useParams } from 'react-router-dom'
import { lessons, modules } from '../data/mockData'
import { CompleteLessonButton } from '../features/lesson/CompleteLessonButton'
import { PositionCard } from '../features/lesson/PositionCard'
import { ReadingCard } from '../features/lesson/ReadingCard'
import { SourceCard } from '../features/lesson/SourceCard'
import { PageHeader } from '../shared/layout/PageHeader'

export function LessonPage() {
  const { moduleId, lessonId } = useParams()
  const lesson = lessons.find((item) => item.id === lessonId) ?? lessons[0]
  const currentModule = modules.find((item) => item.id === moduleId) ?? modules[0]

  return (
    <main className="page lesson-page page-enter">
      <PageHeader title={lesson.title} subtitle={`${currentModule.title} · ${lesson.duration}`} back />
      <div className="lesson-layout">
        <div><ReadingCard lesson={lesson} /><SourceCard /></div>
        <div><PositionCard /><CompleteLessonButton /></div>
      </div>
    </main>
  )
}
