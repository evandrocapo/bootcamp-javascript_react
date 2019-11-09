import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar/SearchBar'
import Home from './container/Home/Home'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <SearchBar/>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
