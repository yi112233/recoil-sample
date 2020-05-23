import React, { ChangeEvent } from 'react'
import { TodoItem } from '../../states/atoms/TodoListState'

type Props = {
  item: TodoItem,
  editItemText: (e: ChangeEvent<HTMLInputElement>) => void,
  toggleItemCompletion: () => void,
  deleteItem: () => void,
}

const Presentation: React.FC<Props> = ({
  item,
  editItemText,
  toggleItemCompletion,
  deleteItem,
}) => {
  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

export default Presentation
