import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Search from "./Search";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Bookmarks from "./components/Bookmarks";
import Live from "./components/Dev-comp/Live";
import Dev from "./components/Dev";

/*...brahim auth...*/
import HomePage from "./brahim/HomePage";
import CreateAccount from "./brahim/CreateAccount";
import PasswordUpdate from "./brahim/PasswordUpdate";
/*...brahim auth...*/


import NewComp from "./components/Dev-comp/NewComp";
import Search from "./components/Dev-comp/Search";
import "./App.css";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <div className="mt-5 container">
              <Route path="/home" exact component={Home} />
              <Route path="/bookmarks" component={Bookmarks} />
              <Route path="/dev" exact component={Dev} />

              
            <Route path="/dev/search" exact component={Search} />
            <Route path="/dev/newcomp" exact component={NewComp} />
            <Route path="/dev/live" exact component={Live} />


            <Route path="/" exact component={HomePage} />
            <Route path="/CreateAccount" exact component={CreateAccount} />
            <Route path="/PasswordUpdate" exact component={PasswordUpdate}/>


            </div>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
