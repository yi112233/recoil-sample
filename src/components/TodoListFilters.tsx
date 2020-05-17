import React, { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'

import { todoListFilterState } from '../states/atoms/TodoListFilterState'

const TodoListFilters: React.FC = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = ({target: {value}}: ChangeEvent<HTMLSelectElement>) => {
    setFilter(value)
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">Show All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}

export default TodoListFilters
