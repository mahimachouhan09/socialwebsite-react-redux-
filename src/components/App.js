import React, { Component } from 'react'
import Login from './Login'
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className ='App-div'>
          <nav>
            <ul className = 'App-nav-ul'>
              <header className ='App-header'>Social App Website</header>
              <li>
                <Link className = 'nav-ul-links' to="/">Home page</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path ="/" ><Login /></Route>
          </Switch>
        </div>
      </Router>    
    )
  }
}

export default App
