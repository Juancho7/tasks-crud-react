import { useState } from 'react'
import TaskList from './components/TaskList'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('')

  const handleChange = (event) => {
    const taskTitle = event.target.value

    setTask(taskTitle)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newTask = {
      id: crypto.randomUUID(),
      title: task,
      completed: false
    }

    const newTasksList = [...tasks, newTask]
    setTasks(newTasksList)
  }

  const onCompleteTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) return { ...task, completed: !task.completed }

      return task
    })

    setTasks(updatedTasks)
  }

  const onEditTask = (id, newTitle) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) return { ...task, title: newTitle, completed: !task.completed }

      return task
    })

    setTasks(updatedTasks)
  }

  const onDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Write your task here...' onChange={handleChange} value={task} />
        <input type='submit' value='Add' />
      </form>

      <section>
        <TaskList tasksList={tasks} onCompleteTask={onCompleteTask} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
      </section>
    </main>
  )
}

export default App
