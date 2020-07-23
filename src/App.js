import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AuthForm from './components/AuthForm';
import Pricing from './components/Pricing';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import CreateBoard from './components/CreateBoard';
import CreateUpdate from './components/CreateUpdate';
import Home from './components/Home';
import Board from './components/Board';
import CheckoutForm from './components/CheckoutForm';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Switch>
        <Route path="/signup">
          <AuthForm setIsAuth={setIsAuth} signup />
        </Route>
        <Route path="/login">
          <AuthForm setIsAuth={setIsAuth} />
        </Route>
        <Route path="/" exact>
          <Hero />
          <Features />
          <Pricing />
          <About />
          <Footer />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/create-board">
          <CreateBoard />
        </Route>
        <Route path="/create-update">
          <CreateUpdate />
        </Route>
        <Route path="/:company/:board">
          <Board />
        </Route>
      </Switch>
    </Router>
  );
}
