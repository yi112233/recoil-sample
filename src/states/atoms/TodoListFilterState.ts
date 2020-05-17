import { atom } from 'recoil'

const initialFilter: string = 'Show All'

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: initialFilter,
})
