import React from 'react';
import Header from './components/Header.js'
import Tasks from './components/Tasks.js';

import { useState } from "react"

function App() {

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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
