import React, { Component } from 'react';
import { Link } from "react-router-dom";



class Header extends Component {
    render() {
        return (
            
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link className="navbar-brand" to="/klirhome">KLIR tweets</Link>

                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item active">
                                <Link className="nav-link" to="/search">Search <span className="sr-only">(current)</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/bookmarks">Bookmarks</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/live">Live</Link>
                            </li>
                        </ul>
                        
                        <div className="dropdown">
                            <Link className="btn btn-primary dropdown-toggle" to="/account" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Khaled
                            </Link>

                            <div className="dropdown-menu"          aria-labelledby="dropdownMenuLink">
                                <Link className="dropdown-item" to="/account">Account</Link>
                                <Link className="dropdown-item" to="/logout">Logout</Link>
                               
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Header