import { Check, ChevronRight, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Lesson } from '../types/domain'

export function LessonRow({ lesson }: { lesson: Lesson }) {
  const locked = lesson.status === 'Закрыт'
  const content = (
    <>
      <span className="lesson-number">{lesson.order}</span>
      <div><h3>{lesson.title}</h3><p>{lesson.duration} · {lesson.status}</p></div>
      {locked ? <LockKeyhole size={15} /> : lesson.status === 'Пройден' ? <Check size={17} /> : <ChevronRight size={17} />}
    </>
  )

  return locked ? (
    <div className="lesson-row locked">{content}</div>
  ) : (
    <Link className="lesson-row" to={`/courses/${lesson.moduleId}/${lesson.id}`}>{content}</Link>
  )
}
