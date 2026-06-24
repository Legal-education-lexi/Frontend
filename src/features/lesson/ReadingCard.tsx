import type { Lesson } from '../../shared/types/domain'

export function ReadingCard({ lesson }: { lesson: Lesson }) {
  return (
    <article className="reading-card">
      <span className="eyebrow">Ключевая идея</span>
      <p className="lead-paragraph">{lesson.text}</p>
      <p>Точная правовая работа начинается с вопроса: какой факт имеет значение и каким источником подтверждается вывод?</p>
    </article>
  )
}
