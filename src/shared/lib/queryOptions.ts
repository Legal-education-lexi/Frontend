import { queryOptions } from '@tanstack/react-query'
import { mockApi } from '../../data/mockApi'

export const modulesQuery = queryOptions({
  queryKey: ['modules'],
  queryFn: mockApi.getModules,
})

export const newsQuery = queryOptions({
  queryKey: ['news'],
  queryFn: mockApi.getNews,
})

export const practiceCardsQuery = queryOptions({
  queryKey: ['practice-cards'],
  queryFn: mockApi.getPracticeCards,
})
