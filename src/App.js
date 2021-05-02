import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projectspage from './components/ProjectsPage/Projectspage';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/project">
            <Projectspage></Projectspage>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
