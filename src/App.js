import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage/Homepage';
import {Header} from './components/header/header'
import Shop from './pages/shop/shop';
import { Account } from './pages/account/account';
import SingIn from './components/sing-in/sing-in';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/account" component={Account} />
        <Route path="/singin" component={SingIn} />
      </Switch>
    </div>
  );
}

export default App;
