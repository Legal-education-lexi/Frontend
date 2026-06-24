import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ArrowRight, Check } from 'lucide-react'

export function CompleteLessonButton() {
  const [completed, setCompleted] = useState(false)
  const queryClient = useQueryClient()
  const completion = useMutation({
    mutationFn: async () => true,
    onSuccess: () => {
      setCompleted(true)
      queryClient.invalidateQueries({ queryKey: ['lessons'] })
    },
  })

  return (
    <button
      className={`complete-button ${completed ? 'done' : ''}`}
      type="button"
      onClick={() => completion.mutate()}
      disabled={completion.isPending || completed}
    >
      {completed ? <><Check size={17} /> Урок завершён</> : <>Завершить урок <ArrowRight size={17} /></>}
    </button>
  )
}
