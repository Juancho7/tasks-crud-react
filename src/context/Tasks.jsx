import { createContext, useState } from 'react'
import { fetchTasksFromLocalstorage } from '../logic/storage'

export const TasksContext = createContext()

export function TasksProvider ({ children }) {
  const [tasks, setTasks] = useState(fetchTasksFromLocalstorage())

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}
