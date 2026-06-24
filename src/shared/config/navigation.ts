import { BookOpen, FileText, Home, UserRound } from 'lucide-react'

export const navigationItems = [
  { to: '/', label: 'Главная', icon: Home },
  { to: '/courses', label: 'Курсы', icon: BookOpen },
  { to: '/notes', label: 'Заметки', icon: FileText },
  { to: '/profile', label: 'Профиль', icon: UserRound },
] as const
