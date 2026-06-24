import { Scale } from 'lucide-react'

export function PositionCard() {
  return (
    <section className="position-card">
      <Scale size={21} />
      <span className="eyebrow">Вопрос для позиции</span>
      <h3>Когда формально допустимое поведение стороны становится недобросовестным?</h3>
      <textarea aria-label="Черновик позиции" placeholder="Зафиксируйте мысль в двух предложениях…" />
    </section>
  )
}
