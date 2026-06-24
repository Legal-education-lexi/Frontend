import { BookOpen, ChevronRight } from 'lucide-react'

export function SourceCard() {
  return (
    <section className="source-card">
      <div className="source-icon"><BookOpen size={19} /></div>
      <div><span className="eyebrow">Источник</span><h3>Учебный фрагмент</h3><p>Принципы обязательственного права, редакция Lexio</p></div>
      <ChevronRight size={16} />
    </section>
  )
}
