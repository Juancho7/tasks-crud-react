import React from 'react'
import Task from './Task'

const TaskList = ({ tasksList, onCompleteTask, onEditTask, onDeleteTask }) => {
  return (
    <ul>
      {
        tasksList.map(task => (
          <Task key={task.id} id={task.id} title={task.title} completed={task.completed} onCompleteTask={onCompleteTask} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
        ))
        }
    </ul>
  )
}

export default TaskList
