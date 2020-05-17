import React from 'react'
import { useRecoilValue } from 'recoil'
import { TodoListStats } from './TodoListStats'
import { TodoListFilters } from './TodoListFilters'
import { TodoItemCreator } from './TodoItemCreator'
import { TodoItem } from './TodoItem';
import { filteredTodoListState } from '../states/selectors/FilteredTodoListState'

export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} />
      ))}
    </>
  )
}