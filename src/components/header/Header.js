import React, { Component } from "react";
import "../../App.css";
import logo from "./Tweet.png";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
   

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#"><img src={logo} className="w-25"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
     
    <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/bookmarks">
                  Bookmarks
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/dev/live">
                  Live
                </Link>
              </li>
             
              <li className="nav-item active">
                <Link className="nav-link" to="/dev/NewComp">
                favoris
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/dev/search">
              Recherche
                </Link>

                
              </li>

              </ul>
          


  </div>
</nav>


      
    );
  }
}


