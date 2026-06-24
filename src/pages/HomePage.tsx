import { DailyCaseCard } from '../features/daily-case/DailyCaseCard'
import { LearningActions } from '../features/learning-actions/LearningActions'
import { ModuleShowcase } from '../features/module-list/ModuleShowcase'
import { WeeklyProgressCard } from '../features/weekly-progress/WeeklyProgressCard'

export function HomePage() {
  return (
    <main className="page home-page page-enter">
      <DailyCaseCard />
      <LearningActions />
      <div className="home-lower-grid">
        <ModuleShowcase />
        <WeeklyProgressCard />
      </div>
    </main>
  )
}
