import React from 'react';
import Tracker from './components/Tracker.js';
import Login from './components/Login';

import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

  const logged = useSelector((state) => state.login.log)

  useEffect(() => {
    if(logged === false && window.location.pathname === "/tracker") {
      window.location.href = "/"
      localStorage.clear()
      // sessionStorage.removeItem('user')
    }
    localStorage.user1 = JSON.stringify({user: "John", password: "123"});
    localStorage.user2 = JSON.stringify({user: "Liza", password: "333"});
    localStorage.user3 = JSON.stringify({user: "Wo", password: "312"});
  })
  return (
    <Router>
      <div className="container">
      {!logged && <Login/>}
      <Route path="/tracker" component={Tracker}/>
      </div>
    </Router>
  );
}

export default App;
