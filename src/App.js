import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage/Homepage';
import {Header} from './components/header/header'
import Shop from './pages/shop/shop';
import { Account } from './pages/account/account';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/account" component={Account} />
      </Switch>
    </div>
  );
}

export default App;
