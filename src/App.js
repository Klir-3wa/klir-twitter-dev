import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
import UserHome from './components/pages/userpages/UserHome';
// import About from './components/pages/generalpages/About';
import NotFound from './components/pages/generalpages/NotFound';
import Bookmarks from './components/pages/userpages/Bookmarks';
import Live from './components/pages/userpages/Live';
import Account from './components/pages/userpages/Account';
import Home from './components/pages/generalpages/Home';
import Search from './components/pages/userpages/Search';
import Login from './components/pages/authpages/Login';
import Register from './components/pages/authpages/Register';
import Reset from './components/pages/authpages/Reset';
import Logout from './components/pages/authpages/Logout';
import './App.css';

//@ ---------------------- END OF IMPORTS <-----------------------
class App extends Component {
  
  

  // @------> method to add tweets to bookmarks<-------------
  addToBookmarks = (tweetId) => {
    this.setState({ bookmarks: [...this.state.bookmarks, tweetId] });
    console.table(this.state.bookmarks)
  }
 
  // @------> The Render Method<-------------
  render() {
   
    return (
      <Router>
        <div className='App'>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/klirhome" component={UserHome} />
              <Route exact path="/bookmarks" component={Bookmarks} />
              <Route exact path="/live" component={Live} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/Reset" component={Reset} />
              <Route component={NotFound} />
            </Switch>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    )
  }
}

export default App;


