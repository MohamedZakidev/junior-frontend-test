import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import FilterBar from './components/FilterBar'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📋 Task Manager</h1>
        <p>Organize and manage your tasks efficiently</p>
      </header>
      <main className="app-main">
        <section className="input-section">
          <TaskInput />
        </section>
        <section className="filter-section">
          <FilterBar />
        </section>
        <section className="list-section">
          <TaskList />
        </section>
      </main>
    </div>
  )
}

export default App
