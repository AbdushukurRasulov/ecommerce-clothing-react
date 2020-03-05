import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './App.css';

import { Homepage } from './pages/homepage/Homepage';
import Header from './components/header/header'
import Shop from './pages/shop/shop';
import { Account } from './pages/account/account';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckOutPage from './pages/checkout/checkout';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } 
      setCurrentUser(userAuth)
    })
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route exact path="/accounts" render={() => this.props.currentUser ? (<Redirect to='/' />):(<Account />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser});

const mapDispatchToProps = distpach => ({
  setCurrentUser: user => distpach(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
