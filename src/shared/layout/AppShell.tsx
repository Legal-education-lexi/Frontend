import { Outlet } from 'react-router-dom'
import { AppHeader } from './AppHeader'
import { Navigation } from './Navigation'

export function AppShell() {
  return (
    <div className="stage">
      <div className="app-shell">
        <AppHeader />
        <Outlet />
        <Navigation variant="mobile" />
      </div>
    </div>
  )
}
