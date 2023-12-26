import { useContext } from 'react'
import { TasksContext } from '../context/Tasks'

export const useTasks = () => {
  const { tasks, setTasks } = useContext(TasksContext)

  return { tasks, setTasks }
}
