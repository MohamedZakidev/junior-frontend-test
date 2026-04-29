import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/tasksSlice'
import './TaskInput.css'

const TaskInput = () => {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('Medium')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      dispatch(addTask({ title: title.trim(), priority }))
      setTitle('')
      setPriority('Medium')
    }
  }

  return (
    <form className="task-input-container" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="task-input"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="priority-select"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit" className="add-btn">Add Task</button>
      </div>
    </form>
  )
}

export default TaskInput
