import { atom } from 'recoil'

export type TodoItem = {
  id: number,
  text: string,
  isComplete: boolean,
}

export type TodoList = TodoItem[]

const initialTodoList: TodoList = []

export const todoListState = atom({
  key: 'todoListState',
  default: initialTodoList,
})
