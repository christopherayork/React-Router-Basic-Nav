import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />

    <Route path='/' exact />
    <Route  path='/about' />
    <Route  path='/contact' />

  </div>
);

export default App;
