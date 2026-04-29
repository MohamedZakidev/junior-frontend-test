import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
  filter: 'All', // All, High, Medium, Low
}

// Load tasks from localStorage on initialization
const loadTasksFromStorage = () => {
  try {
    const stored = localStorage.getItem('tasks')
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error)
    return []
  }
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    ...initialState,
    tasks: loadTasksFromStorage(),
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        priority: action.payload.priority || 'Medium',
        completed: false,
        createdAt: new Date().toISOString(),
      }
      state.tasks.push(newTask)
      saveTasksToStorage(state.tasks)
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
      saveTasksToStorage(state.tasks)
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload)
      if (task) {
        task.completed = !task.completed
        saveTasksToStorage(state.tasks)
      }
    },
    editTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id)
      if (task) {
        task.title = action.payload.title
        task.priority = action.payload.priority
        saveTasksToStorage(state.tasks)
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

// Helper function to save tasks to localStorage
const saveTasksToStorage = (tasks) => {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error)
  }
}

export const { addTask, deleteTask, toggleTask, editTask, setFilter } = tasksSlice.actions
export default tasksSlice.reducer
