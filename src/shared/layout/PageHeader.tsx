import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface PageHeaderProps {
  title: string
  subtitle?: string
  back?: boolean
  backTo?: string
  backLabel?: string
}

export function PageHeader({ title, subtitle, back = false, backTo, backLabel = 'Назад' }: PageHeaderProps) {
  const navigate = useNavigate()
  const showBackButton = back || Boolean(backTo)

  function handleBack() {
    if (backTo) {
      navigate(backTo)
      return
    }

    navigate(-1)
  }

  return (
    <header className="page-heading">
      {showBackButton ? (
        <button className="back-link" onClick={handleBack} type="button">
          <ArrowLeft size={16} /> {backLabel}
        </button>
      ) : null}
      <div>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </header>
  )
}
