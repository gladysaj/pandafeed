import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

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
          <Hero />
        </Route>
      </Switch>
    </Router>
  );
}
