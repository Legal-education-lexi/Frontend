import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  action?: ReactNode
}

export function SectionHeading({ title, action }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {action}
    </div>
  )
}
