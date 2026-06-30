import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '../shared/layout/AppShell'
import { CoursesPage } from '../pages/CoursesPage'
import { HomePage } from '../pages/HomePage'
import { LessonPage } from '../pages/LessonPage'
import { ModulePage } from '../pages/ModulePage'
import { NewsDetailPage, NewsPage } from '../pages/NewsPage'
import { ProfilePage } from '../pages/ProfilePage'
import { PracticePage } from '../pages/PracticePage'

export function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:moduleId" element={<ModulePage />} />
        <Route path="courses/:moduleId/:lessonId" element={<LessonPage />} />
        <Route path="practice" element={<PracticePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="news/:newsId" element={<NewsDetailPage />} />
        <Route path="notes" element={<Navigate to="/news" replace />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
