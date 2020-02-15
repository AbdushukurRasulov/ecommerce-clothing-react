import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage/Homepage';
import Shop from './pages/shop/shop';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={Shop} />
      
    </Switch>
  );
}

export default App;
