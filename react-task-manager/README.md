# React Task Manager

A modern, feature-rich task management application built with **React**, **Redux** (via Redux Toolkit), and **Vite**.

## 🚀 Features

### Task Management
- ✅ **Add Tasks** - Create new tasks with priority levels (High, Medium, Low)
- ✏️ **Edit Tasks** - Update task title and priority on the fly
- 🗑️ **Delete Tasks** - Remove completed or unwanted tasks
- ✔️ **Toggle Completion** - Mark tasks as complete/incomplete

### Filtering & Organization
- 🔍 **Filter by Priority** - View tasks by priority level (All, High, Medium, Low)
- 📊 **Real-time Statistics** - Track total, completed, and pending tasks
- 🎯 **Smart Display** - Empty state messages guide users

### Data Persistence
- 💾 **LocalStorage Integration** - All tasks are automatically saved and persist across browser sessions
- 🔄 **Instant Sync** - Changes are saved immediately upon any action

## 🛠️ Tech Stack

- **React 18.2** - UI library
- **Redux Toolkit** - State management
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations

## 📋 Project Structure

```
react-task-manager/
├── src/
│   ├── components/
│   │   ├── TaskInput.jsx       # Add task form
│   │   ├── TaskItem.jsx        # Individual task component
│   │   ├── TaskList.jsx        # Task list container
│   │   ├── FilterBar.jsx       # Priority filter buttons
│   │   └── *.css               # Component styles
│   ├── redux/
│   │   ├── tasksSlice.js       # Redux slice with reducers
│   │   └── store.js            # Redux store configuration
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will open in your default browser at `http://localhost:3000`

### Production Build

```bash
npm run build
```

Optimized build will be generated in the `dist/` folder.

### Preview Build

```bash
npm run preview
```

## 📱 How to Use

1. **Add a Task**
   - Enter task title in the input field
   - Select priority from dropdown (defaults to Medium)
   - Click "Add Task" or press Enter

2. **Manage Tasks**
   - Check checkbox to mark task as complete
   - Click "Edit" to modify title or priority
   - Click "Delete" to remove task

3. **Filter Tasks**
   - Use filter buttons to view tasks by priority
   - "All" button shows all tasks regardless of priority

4. **View Statistics**
   - Task stats display at the top of the list
   - Shows: Total, Completed, and Pending counts

## 🎨 Design Features

- **Modern Gradient UI** - Purple-gradient header with smooth transitions
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Color-Coded Priorities**
  - 🔴 High: Red background
  - 🟡 Medium: Orange background
  - 🟢 Low: Green background
- **Visual Feedback** - Hover effects and smooth animations
- **Accessibility** - Proper contrast ratios and keyboard support

## 💾 Data Persistence

Tasks are automatically saved to browser localStorage and will persist even after closing the browser. Each task includes:
- Unique ID (timestamp-based)
- Title
- Priority level
- Completion status
- Creation timestamp

## 🔧 Redux State Structure

```javascript
{
  tasks: {
    tasks: [
      {
        id: 1234567890,
        title: "Task title",
        priority: "High|Medium|Low",
        completed: false,
        createdAt: "2024-04-29T..."
      }
    ],
    filter: "All|High|Medium|Low"
  }
}
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available for educational purposes.
