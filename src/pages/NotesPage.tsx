import { useQuery } from '@tanstack/react-query'
import { notesQuery } from '../shared/lib/queryOptions'
import { PageHeader } from '../shared/layout/PageHeader'

export function NotesPage() {
  const { data: notes = [] } = useQuery(notesQuery)

  return (
    <main className="page page-enter">
      <PageHeader title="Заметки" subtitle="Ваши формулировки, вопросы и опорные мысли." />
      <div className="notes-list">
        {notes.map((note) => (
          <article className="note-card" key={note.id}>
            <span className="eyebrow">{note.date}</span><h2>{note.topic}</h2><p>{note.text}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
