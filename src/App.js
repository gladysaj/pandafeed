import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/signup">
          <h1>Sign up</h1>
        </Route>
        <Route path="/login">
          <h1>Log in</h1>
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  );
}
