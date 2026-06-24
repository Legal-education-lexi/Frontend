import { studentProfile } from '../data/mockData'
import { PageHeader } from '../shared/layout/PageHeader'
import { ThemeSelector } from '../shared/theme/ThemeSelector'

export function ProfilePage() {
  return (
    <main className="page page-enter">
      <PageHeader title="Профиль" subtitle="Ваш путь в юридической среде." />
      <div className="profile-layout">
        <section className="profile-card">
          <div className="avatar">{studentProfile.name.slice(0, 1)}</div>
          <span className="eyebrow">Студент Lexio</span>
          <h2>{studentProfile.name}</h2>
          <p>{studentProfile.level}</p>
        </section>
        <div>
          <section className="profile-details">
            <div><span>Текущий фокус</span><strong>{studentProfile.focus}</strong></div>
            <div><span>Цель недели</span><strong>{studentProfile.goal}</strong></div>
          </section>
          <ThemeSelector />
          <blockquote>«Точность — это форма уважения к собеседнику, факту и источнику.»</blockquote>
        </div>
      </div>
    </main>
  )
}
