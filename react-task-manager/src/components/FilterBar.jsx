import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../redux/tasksSlice'
import './FilterBar.css'

const FilterBar = () => {
  const dispatch = useDispatch()
  const currentFilter = useSelector((state) => state.tasks.filter)

  const filters = ['All', 'High', 'Medium', 'Low']

  return (
    <div className="filter-bar">
      <h3>Filter by Priority:</h3>
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => dispatch(setFilter(filter))}
            className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterBar
