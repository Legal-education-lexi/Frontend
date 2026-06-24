import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Navigation } from './Navigation'
import { ThemeToggle } from '../theme/ThemeToggle'

export function AppHeader() {
  return (
    <header className="app-header">
      <Link to="/" className="brand" aria-label="Lexio, на главную">
        LEXIO
      </Link>
      <Navigation variant="desktop" />
      <div className="header-actions">
        <ThemeToggle />
        <button className="icon-button" type="button" aria-label="Уведомления">
          <Bell size={19} strokeWidth={1.45} />
          <span className="notification-dot" />
        </button>
      </div>
    </header>
  )
}
