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

export interface NewsItem {
  id: string
  date: string
  readingTime: string
  category: string
  title: string
  summary: string
  lead: string
  body: string[]
  source: string
}

export interface PracticeCardBase {
  id: string
  title: string
  subtitle: string
  eyebrow: string
}

export interface PracticeTermGroup {
  id: string
  title: string
  icon: 'person' | 'building' | 'scale'
}

export interface PracticeTerm {
  id: string
  label: string
  groupId: string
}

export interface TermGroupingCard extends PracticeCardBase {
  type: 'term-grouping'
  groups: PracticeTermGroup[]
  terms: PracticeTerm[]
}

export interface MissingTermCard extends PracticeCardBase {
  type: 'missing-term'
  textBefore: string
  textAfter: string
  options: string[]
  correctAnswer: string
}

export interface TrueFalseCard extends PracticeCardBase {
  type: 'true-false'
  statement: string
  correctAnswer: boolean
}

export interface NormSelectionCard extends PracticeCardBase {
  type: 'norm-selection'
  caseText: string
  options: string[]
  correctAnswers: string[]
}

export interface CaseChoiceCard extends PracticeCardBase {
  type: 'case-choice'
  caseText: string
  question: string
  options: string[]
  correctAnswer: string
}

export type PracticeCard =
  | TermGroupingCard
  | MissingTermCard
  | TrueFalseCard
  | NormSelectionCard
  | CaseChoiceCard
