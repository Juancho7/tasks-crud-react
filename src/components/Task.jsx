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
    <li>
      {
        edit
          ? <EditTask id={id} title={title} onEditTask={onEditTask} onEditingDone={onEdit} />
          : (
            <>
              <button onClick={onComplete}>Complete</button>
              <span className={completedClass}>{title}</span>
              <button onClick={onEdit}>Edit</button>
              <button onClick={onDelete}>Delete</button>
            </>
            )
      }
    </li>
  )
}

export default Task
