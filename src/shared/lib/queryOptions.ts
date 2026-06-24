import { queryOptions } from '@tanstack/react-query'
import { mockApi } from '../../data/mockApi'

export const modulesQuery = queryOptions({
  queryKey: ['modules'],
  queryFn: mockApi.getModules,
})

export const notesQuery = queryOptions({
  queryKey: ['notes'],
  queryFn: mockApi.getNotes,
})
