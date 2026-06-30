import { lessons, modules, news, practiceCards } from './mockData'

// Асинхронный контракт сохранён намеренно: UI использует тот же слой данных,
// который позже можно заменить реальным клиентом без изменений компонентов.
export const mockApi = {
  getModules: async () => modules,
  getLessons: async () => lessons,
  getNews: async () => news,
  getPracticeCards: async () => practiceCards,
}
