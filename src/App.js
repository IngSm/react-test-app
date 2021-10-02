import React from 'react';
import Header from './components/Header.js'
import Tasks from './components/Tasks.js';
import AddTask from './components/AddTask.js';
import Footer from './components/Footer.js';
import About from './components/About.js';

import { useState } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Make landing',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Make react-app',
        day: 'Feb 10th at 5:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Study Nuxt.js',
        day: 'Feb 29th at 1:30pm',
        reminder: false
    }
])

// Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask ])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route path="/" exact render={(props) => (
          <>
          {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? 
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        : 'No tasks to show'}
          </>
        )} />
        <Route path='/about' component={About}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
