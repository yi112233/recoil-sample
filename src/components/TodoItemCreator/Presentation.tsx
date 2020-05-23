import React, { useState, ChangeEvent } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from 'states/atoms/TodoListState'

let id: number = 0
function getId(): number {
  return id++
}

const TodoItemCreator: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = (): void => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ])
  }

  const onChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => setInputValue(value)

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default TodoItemCreator
