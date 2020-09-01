import React from 'react';

import './App.css';
import AddChapter from './components/AddChapter';
import SeeChapter from './components/SeeChapter';
import Dashboard from './components/Dashboard';
// import AdminDashboard from './components/admin/AdminDashboard';
import {BrowserRouter as Router ,Route,Switch,Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
      <div className="header-top">
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/subject">Subject</a></li>
        <li><a href="/chapter">Chapter</a></li>
      </ul>
      </div>

      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        
        <Route path="/subject">
          <SeeChapter/>
        </Route>
        <Route path="/chapter">
          <AddChapter/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
