import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '../shared/layout/AppShell'
import { CoursesPage } from '../pages/CoursesPage'
import { HomePage } from '../pages/HomePage'
import { LessonPage } from '../pages/LessonPage'
import { ModulePage } from '../pages/ModulePage'
import { NotesPage } from '../pages/NotesPage'
import { ProfilePage } from '../pages/ProfilePage'

export function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:moduleId" element={<ModulePage />} />
        <Route path="courses/:moduleId/:lessonId" element={<LessonPage />} />
        <Route path="notes" element={<NotesPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
