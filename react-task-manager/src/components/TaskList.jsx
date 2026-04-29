import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'
import './TaskList.css'

const TaskList = () => {
  const { tasks, filter } = useSelector((state) => state.tasks)

  const filteredTasks = useMemo(() => {
    if (filter === 'All') {
      return tasks
    }
    return tasks.filter((task) => task.priority === filter)
  }, [tasks, filter])

  return (
    <div className="task-list-container">
      <div className="task-stats">
        <p>Total Tasks: <strong>{tasks.length}</strong></p>
        <p>Completed: <strong>{tasks.filter((t) => t.completed).length}</strong></p>
        <p>Pending: <strong>{tasks.filter((t) => !t.completed).length}</strong></p>
      </div>
      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <p className="empty-message">
            {tasks.length === 0 ? 'No tasks yet. Add one to get started!' : `No ${filter} priority tasks.`}
          </p>
        ) : (
          filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </div>
    </div>
  )
}

export default TaskList
