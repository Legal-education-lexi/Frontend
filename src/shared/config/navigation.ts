import { BookOpen, Home, Newspaper, UserRound } from 'lucide-react'

export const navigationItems = [
  { to: '/', label: 'Главная', icon: Home },
  { to: '/courses', label: 'Курсы', icon: BookOpen },
  { to: '/news', label: 'Новости', icon: Newspaper },
  { to: '/profile', label: 'Профиль', icon: UserRound },
] as const
