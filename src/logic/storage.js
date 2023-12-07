export const saveTasksOnLocalstorage = (tasks) => {
  window.localStorage.setItem('tasks', JSON.stringify(tasks))
}

export const fetchTasksFromLocalstorage = () => {
  const storedTasks = window.localStorage.getItem('tasks')
  const initialTasksList = storedTasks ? JSON.parse(storedTasks) : []
  return initialTasksList
}
