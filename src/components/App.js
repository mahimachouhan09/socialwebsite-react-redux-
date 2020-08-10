import React, { Component } from 'react'
import Login from './Login'
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul className = 'nav-ul'>
            <header className ='App-header'>Social Website</header>
            <li>
              <Link exact className = 'nav-ul-links' to="/">Home page</Link>
            </li>
            <li>
              <Link className = 'nav-ul-links' to="/postfeed">postfeed</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route exact path="/" >
          <Login />
        </Route>
        <Route exact path="/postfeed" >
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>    
    )
  }
}

export default App
