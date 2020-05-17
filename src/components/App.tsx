import React from 'react'

import { RecoilRoot } from 'recoil'
import TodoList from './TodoList'

const App: React.FC = () => (
  <RecoilRoot>
    <div>
      <TodoList />
    </div>
  </RecoilRoot>
)

export default App
