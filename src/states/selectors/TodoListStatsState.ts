import { selector } from 'recoil'
import { filteredTodoListState } from './FilteredTodoListState' 

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(filteredTodoListState)
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = todoList.filter((item) => !item.isComplete).length
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  }
})