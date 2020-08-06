import React from 'react';
import './App.css';
import * as ReactBootsrap from 'react-bootstrap';
import { Upload } from './components/Upload';
import { Gallery } from './components/Gallery';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/upload" component={Upload}>
            <Upload />
          </Route>
          <Route exact path="/gallery" component={Gallery}>
            <Gallery />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
