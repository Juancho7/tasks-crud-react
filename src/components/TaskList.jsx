import { useTasks } from '../hooks/useTasks'
import Task from './Task'

const TaskList = ({ onCompleteTask, onEditTask, onDeleteTask }) => {
  const { tasks } = useTasks()

  return (
    <ul className='flex flex-col gap-y-2'>
      {
        tasks.map(task => (
          <Task key={task.id} id={task.id} title={task.title} completed={task.completed} onCompleteTask={onCompleteTask} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
        ))
        }
    </ul>
  )
}

export default TaskList
