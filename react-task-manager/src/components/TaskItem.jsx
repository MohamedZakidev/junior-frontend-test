import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleTask, editTask } from '../redux/tasksSlice'
import './TaskItem.css'

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(task.title)
  const [editedPriority, setEditedPriority] = useState(task.priority)
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
  }

  const handleToggle = () => {
    dispatch(toggleTask(task.id))
  }

  const handleSaveEdit = () => {
    if (editedTitle.trim()) {
      dispatch(editTask({ id: task.id, title: editedTitle.trim(), priority: editedPriority }))
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditedTitle(task.title)
    setEditedPriority(task.priority)
    setIsEditing(false)
  }

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'priority-high'
      case 'Medium':
        return 'priority-medium'
      case 'Low':
        return 'priority-low'
      default:
        return ''
    }
  }

  if (isEditing) {
    return (
      <div className="task-item editing">
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="edit-input"
          autoFocus
        />
        <select
          value={editedPriority}
          onChange={(e) => setEditedPriority(e.target.value)}
          className="priority-select-edit"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button onClick={handleSaveEdit} className="save-btn">Save</button>
        <button onClick={handleCancel} className="cancel-btn">Cancel</button>
      </div>
    )
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        className="task-checkbox"
      />
      <div className="task-content">
        <span className="task-title">{task.title}</span>
        <span className={`task-priority ${getPriorityClass(task.priority)}`}>
          {task.priority}
        </span>
      </div>
      <div className="task-actions">
        <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
        <button onClick={handleDelete} className="delete-btn">Delete</button>
      </div>
    </div>
  )
}

export default TaskItem
