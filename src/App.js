import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AuthForm from './components/AuthForm';
import Pricing from './components/Pricing';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import Onboarding from './components/Onboarding';
import CreateCompany from './components/CreateCompany';

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
        <Route path="/" exact>
          <Hero />
          <Features />
          <Pricing />
          <About />
          <Footer />
        </Route>
        <Route path="/onboarding">
          <Onboarding />
        </Route>
        <Route path="/create-company">
          <CreateCompany />
        </Route>
      </Switch>
    </Router>
  );
}
