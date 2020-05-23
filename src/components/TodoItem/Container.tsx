import React, { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { todoListState, TodoList, TodoItem } from '../../states/atoms/TodoListState'

import Presentation from './Presentation'

type Props = {
  item: TodoItem,
}

const Container: React.FC<Props> = ({item}) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((listItem) => listItem === item)

  const editItemText = ({target: {value}}: ChangeEvent<HTMLInputElement>): void => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    })

    setTodoList(newList)
  }

  const toggleItemCompletion = (): void => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })

    setTodoList(newList)
  }

  const deleteItem = (): void => {
    const newList = removeItemAtIndex(todoList, index)

    setTodoList(newList)
  }

  return (
    <Presentation
      item={item}
      editItemText={editItemText}
      toggleItemCompletion={toggleItemCompletion}
      deleteItem={deleteItem}
    />
  )
}

function replaceItemAtIndex(arr: TodoList, index: number, newValue: TodoItem): TodoList {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

function removeItemAtIndex(arr: TodoList, index: number): TodoList {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export default Container
