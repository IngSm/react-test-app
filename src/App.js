import React from 'react';
import Header from './components/Header.js'
import Tasks from './components/Tasks.js';
import AddTask from './components/AddTask.js';
import Footer from './components/Footer.js';
import About from './components/About.js';

import { useState } from "react"
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  const tasks = useSelector((state) => state.addTask.tasks) 
  const [showAddTask, setShowAddTask] = useState(false)

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route path="/" exact render={(props) => (
          <>
          {showAddTask && <AddTask/>}
        {tasks.length > 0 ? 
          <Tasks
            tasks={tasks}
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
