import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../states/atoms/TodoListState'

let id = 0
function getId() {
  return id++
}

export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ])
  }

  const onChange = ({target: {value}}) => setInputValue(value)

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}