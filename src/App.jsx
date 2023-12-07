import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import { saveTasksOnLocalstorage, fetchTasksFromLocalstorage } from './logic/storage'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState(fetchTasksFromLocalstorage())
  const [task, setTask] = useState('')

  useEffect(() => saveTasksOnLocalstorage(tasks), [tasks])

  const handleChange = (event) => {
    const taskTitle = event.target.value

    setTask(taskTitle)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (task === '') return

    const newTask = {
      id: crypto.randomUUID(),
      title: task,
      completed: false
    }

    const newTasksList = [...tasks, newTask]
    setTasks(newTasksList)
    setTask('')
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
      if (task.id === id) return { ...task, title: newTitle }

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
      <form onSubmit={handleSubmit} className='px-1 py-2 sm:px-10 md:px-20 lg:px-52 xl:px-96 flex gap-x-2 bg-blue-ribbon-500'>
        <input type='text' placeholder='Write your task here...' onChange={handleChange} value={task} className='grow p-1 outline-blue-ribbon-400 rounded' />
        <input type='submit' value='Add' className='px-1 lg:px-5 font-semibold text-white bg-blue-ribbon-800 hover:bg-blue-ribbon-600 rounded cursor-pointer transition-colors' />
      </form>

      {tasks.length > 0 && (
        <div className='sm:px-10 md:px-20 lg:px-52 xl:px-96'>
          <section className='mt-3 md:mt-5 lg:mt-10 p-1 py-2 sm:mx-auto bg-blue-ribbon-500 rounded'>
            <TaskList tasksList={tasks} onCompleteTask={onCompleteTask} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
          </section>
        </div>
      )}
    </main>
  )
}

export default App
