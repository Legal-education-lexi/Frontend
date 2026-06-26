import type { LearningModule, Lesson } from '../shared/types/domain'
import courtGeometry from '../assets/module-images/court-geometry.jpg'
import justiceDetail from '../assets/module-images/justice-detail.jpg'
import legalArchive from '../assets/module-images/legal-archive.jpg'
import columnSteps from '../assets/module-images/column-steps.jpg'

const moduleImagePool = [legalArchive, justiceDetail, courtGeometry, columnSteps] as const

function getStableRandomImage(key: string) {
  let hash = 5381
  for (const character of key) hash = (hash * 33) ^ character.charCodeAt(0)
  return moduleImagePool[Math.abs(hash) % moduleImagePool.length]
}

export const modules: LearningModule[] = [
  {
    id: 'civil-law',
    title: 'Гражданское право',
    eyebrow: 'Частное право',
    description: 'Научитесь читать договор, различать условия и уверенно собирать правовую позицию.',
    tone: 'paper',
    imageUrl: getStableRandomImage('civil-law'),
  },
  {
    id: 'constitutional-law',
    title: 'Конституционное право',
    eyebrow: 'Публичное право',
    description: 'Основы устройства государства, права человека и логика конституционного контроля.',
    tone: 'stone',
    imageUrl: getStableRandomImage('constitutional-law'),
  },
  {
    id: 'court-practice',
    title: 'Судебная практика',
    eyebrow: 'Работа с позицией',
    description: 'От фактов дела — к аргументу, источнику и ясной юридической формулировке.',
    tone: 'court',
    imageUrl: getStableRandomImage('court-practice'),
  },
]

export const lessons: Lesson[] = [
  {
    id: 'good-faith',
    moduleId: 'civil-law',
    order: '01',
    title: 'Принцип добросовестности',
    duration: '12 мин',
    status: 'Пройден',
    text: 'Добросовестность помогает оценить не только буквальное содержание действий сторон, но и то, насколько их поведение соответствует разумным ожиданиям участников оборота.',
  },
  {
    id: 'contract-terms',
    moduleId: 'civil-law',
    order: '02',
    title: 'Условия договора',
    duration: '16 мин',
    status: 'Текущий',
    text: 'Условия договора образуют согласованную модель отношений сторон. Юрист отделяет существенные условия от уточняющих и проверяет, насколько ясно выражена воля участников.',
  },
  {
    id: 'interpretation',
    moduleId: 'civil-law',
    order: '03',
    title: 'Толкование намерений',
    duration: '14 мин',
    status: 'Закрыт',
    text: 'Толкование начинается с текста, но не заканчивается им: значение имеют цель соглашения, переписка и последующее поведение сторон.',
  },
  {
    id: 'rights-system',
    moduleId: 'constitutional-law',
    order: '01',
    title: 'Система основных прав',
    duration: '18 мин',
    status: 'Текущий',
    text: 'Основные права задают пределы публичной власти и требуют точного различения права, свободы и гарантии.',
  },
  {
    id: 'court-argument',
    moduleId: 'court-practice',
    order: '01',
    title: 'Структура судебного аргумента',
    duration: '15 мин',
    status: 'Текущий',
    text: 'Сильный аргумент связывает установленный факт, применимую норму и ясный вывод без логических пропусков.',
  },
]

export const dailyCase = {
  label: 'План на сегодня',
  title: 'План\nна сегодня',
  moduleId: 'civil-law',
  lessonId: 'contract-terms',
  backgroundImageUrl: columnSteps,
  actionLabel: 'Открыть',
  stats: [
    { id: 'duration', label: '7 минут' },
    { id: 'cards', label: '17 карточек' },
    { id: 'case', label: '1 дело' },
  ],
}

export const weeklyProgress = {
  time: '4 ч 35 мин',
  goal: '7 ч',
  days: [
    { day: 'Пн', value: 44 },
    { day: 'Вт', value: 66 },
    { day: 'Ср', value: 36 },
    { day: 'Чт', value: 72 },
    { day: 'Пт', value: 82, current: true },
    { day: 'Сб', value: 28 },
    { day: 'Вс', value: 16 },
  ],
}

export const notes = [
  { id: '1', date: '24 ИЮНЯ', topic: 'Добросовестность', text: 'Проверять, могла ли сторона разумно полагаться на поведение контрагента.' },
  { id: '2', date: '21 ИЮНЯ', topic: 'Форма договора', text: 'Форма фиксирует волю сторон, но сама по себе не устраняет неясность условий.' },
  { id: '3', date: '18 ИЮНЯ', topic: 'Структура позиции', text: 'Факт → применимый источник → толкование → вывод.' },
]

export const studentProfile = {
  name: 'Артём',
  level: '1 курс юридической среды',
  focus: 'Гражданское право',
  goal: 'Три вдумчивых занятия',
}
