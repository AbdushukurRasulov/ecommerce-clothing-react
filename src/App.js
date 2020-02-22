import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage/Homepage';
import {Header} from './components/header/header'
import Shop from './pages/shop/shop';
import { Account } from './pages/account/account';
import SingIn from './components/sing-in/sing-in';
import { auth } from './components/firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/account" component={Account} />
          <Route path="/singin" component={SingIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
