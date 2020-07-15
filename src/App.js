import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AuthForm from './components/AuthForm';
import Pricing from './components/Pricing';
import Features from './components/Features';
import About from './components/About';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/signup">
          <AuthForm signup />
        </Route>
        <Route path="/login">
          <AuthForm />
        </Route>
        <Route path="/">
          <Hero />
          <Features />
          <Pricing />
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
