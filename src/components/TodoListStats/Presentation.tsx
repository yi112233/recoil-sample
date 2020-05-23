import React from 'react'
import { useRecoilValue } from "recoil";
import { todoListStatsState } from 'states/selectors/TodoListStatsState'

const TodoListStats: React.FC = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState)

  const formattedPercentCompleted = Math.round(percentCompleted * 100)

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}%</li>
    </ul>
  )
}

export default TodoListStats
