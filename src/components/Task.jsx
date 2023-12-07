import { useState } from 'react'
import EditTask from './EditTask'

const Task = ({ id, title, completed, onCompleteTask, onEditTask, onDeleteTask }) => {
  const [isCompleted, setIsCompleted] = useState(completed)
  const [edit, setEdit] = useState(false)

  const completedClass = isCompleted ? 'completed' : ''

  const onComplete = () => {
    setIsCompleted(!isCompleted)

    onCompleteTask(id)
  }

  const onEdit = () => setEdit(!edit)

  const onDelete = () => onDeleteTask(id)

  return (
    <li className='lg:p-2 flex flex-col lg:flex-row lg:gap-x-2 bg-blue-ribbon-600 rounded'>
      {
        edit
          ? <EditTask id={id} title={title} onEditTask={onEditTask} onEditingDone={onEdit} />
          : (
            <>
              <div className='lg:grow h-8 flex items-center lg:gap-x-2 overflow-hidden'>
                <span className={`${completedClass} lg:order-2 w-full pl-1 text-white rounded overflow-hidden overflow-ellipsis`}>{title}</span>
                <button onClick={onComplete} className='lg:order-1 h-full px-1 lg:px-3 bg-green-500 hover:bg-green-300 rounded transition-colors'>Done</button>
              </div>
              <div className='flex lg:gap-x-2'>
                <button onClick={onEdit} className='grow basis-1 lg:px-3 bg-yellow-500 hover:bg-yellow-300 rounded transition-colors'>Edit</button>
                <button onClick={onDelete} className='grow basis-0 lg:px-3 hover:text-white bg-red-500 hover:bg-red-600 rounded transition-colors'>Delete</button>
              </div>
            </>
            )
      }
    </li>
  )
}

export default Task
