import { useState } from 'react'

const EditTask = ({ id, title, onEditTask, onEditingDone }) => {
  const [editedTitle, setEditedTitle] = useState(title)
  const [placeholderText, setPlaceholderText] = useState('Write the new task title here...')

  const handleChange = (event) => {
    const newTitle = event.target.value
    setEditedTitle(newTitle)
  }

  const onSaveEditedTask = () => {
    if (editedTitle === '') {
      setPlaceholderText('Title cannot be empty')
      return
    }

    onEditTask(id, editedTitle)
    onEditingDone()
  }

  return (
    <>
      <input type='text' value={editedTitle} placeholder={placeholderText} onChange={handleChange} className='grow p-1 outline-yellow-400 rounded' />
      <button onClick={onSaveEditedTask} className='lg:px-3 bg-yellow-500 hover:bg-yellow-300 rounded transition-colors'>Save</button>
    </>
  )
}

export default EditTask
