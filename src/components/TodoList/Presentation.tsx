import React from 'react'
import { useRecoilValue } from 'recoil'
import TodoListStats from '../TodoListStats/Presentation'
import TodoListFilters from '../TodoListFilters/Presentation'
import TodoItemCreator from '../TodoItemCreator/Presentation'
import TodoItem from '../TodoItem/Container';
import { filteredTodoListState } from '../../states/selectors/FilteredTodoListState'

const TodoList: React.FC = () => {
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

export default TodoList
