import React from 'react'
import { useRecoilValue } from 'recoil'
import TodoListStats from 'components/TodoListStats/Presentation'
import TodoListFilters from 'components/TodoListFilters/Presentation'
import TodoItemCreator from 'components/TodoItemCreator/Presentation'
import TodoItem from 'components/TodoItem/Container';
import { filteredTodoListState } from 'states/selectors/FilteredTodoListState'

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
