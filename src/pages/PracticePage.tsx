import { useQuery } from '@tanstack/react-query'
import { PracticeFlow } from '../features/practice/PracticeFlow'
import { practiceCardsQuery } from '../shared/lib/queryOptions'

export function PracticePage() {
  const { data: cards = [] } = useQuery(practiceCardsQuery)

  return (
    <main className="page practice-page page-enter">
      <PracticeFlow cards={cards} />
    </main>
  )
}
