import { NavLink } from 'react-router-dom'
import { navigationItems } from '../config/navigation'

interface NavigationProps {
  variant: 'desktop' | 'mobile'
}

export function Navigation({ variant }: NavigationProps) {
  return (
    <nav className={`${variant}-nav`} aria-label="Основная навигация">
      {navigationItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <Icon size={variant === 'mobile' ? 20 : 16} strokeWidth={1.45} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
