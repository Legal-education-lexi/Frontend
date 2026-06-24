export type LessonStatus = 'Пройден' | 'Текущий' | 'Закрыт'

export interface Lesson {
  id: string
  moduleId: string
  order: string
  title: string
  duration: string
  status: LessonStatus
  text: string
}

export interface LearningModule {
  id: string
  title: string
  eyebrow: string
  description: string
  tone: 'stone' | 'paper' | 'court'
  imageUrl: string
}
