import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface PageHeaderProps {
  title: string
  subtitle?: string
  back?: boolean
}

export function PageHeader({ title, subtitle, back = false }: PageHeaderProps) {
  const navigate = useNavigate()

  return (
    <header className="page-heading">
      {back ? (
        <button className="back-link" onClick={() => navigate(-1)} type="button">
          <ArrowLeft size={16} /> Назад
        </button>
      ) : null}
      <div>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </header>
  )
}
