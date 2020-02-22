import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage/Homepage';
import {Header} from './components/header/header'
import Shop from './pages/shop/shop';
import { Account } from './pages/account/account';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else {
        this.setState({ currentUser: userAuth })
      }
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
          <Route path="/accounts" component={Account} />
        </Switch>
      </div>
    );
  }
}

export default App;
