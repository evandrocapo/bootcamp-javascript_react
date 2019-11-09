import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar/SearchBar'
import Home from './container/Home/Home'
import Video from './container/Video/Video'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <SearchBar />
        <Switch>
          <Route path="/video">
            <Video />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
