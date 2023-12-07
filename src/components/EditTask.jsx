import { useState } from 'react'

const EditTask = ({ id, title, onEditTask, onEditingDone }) => {
  const [editedTitle, setEditedTitle] = useState(title)

  const handleChange = (event) => {
    const newTitle = event.target.value
    setEditedTitle(newTitle)
  }

  const onSaveEditedTask = () => {
    onEditTask(id, editedTitle)
    onEditingDone()
  }

  return (
    <>
      <input type='text' placeholder='Write the new task title here...' onChange={handleChange} />
      <button onClick={onSaveEditedTask}>Save</button>
    </>
  )
}

export default EditTask
