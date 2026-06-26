import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Navigation } from './Navigation'

export function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <Link to="/" className="brand" aria-label="Lexio, на главную">
          LEXIO
        </Link>
        <Navigation variant="desktop" />
        <div className="header-actions">
          <button className="icon-button" type="button" aria-label="Уведомления">
            <Bell size={19} strokeWidth={1.45} />
            <span className="notification-dot" />
          </button>
        </div>
      </div>
    </header>
  )
}
