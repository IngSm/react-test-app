import React from 'react'
import Header from './Header.js'
import Tasks from './Tasks.js';
import AddTask from './AddTask.js';
import Footer from './Footer.js';
import About from './About.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { useState } from "react";
import { useSelector } from 'react-redux';


const Tracker = () => {

  const tasks = useSelector((state) => state.addTask.tasks) 
  const [showAddTask, setShowAddTask] = useState(false)

  return (
    <div>
      <Router>
        <Header
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
            {showAddTask && <AddTask/>}
          {tasks.length > 0 ? 
            <Tasks
              tasks={tasks}
            />
          : 'No tasks to show'}
          <Route path='/about' component={About}/>
          <Footer/>
        </Router>
    </div>
  )
}

export default Tracker
