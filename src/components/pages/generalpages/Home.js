import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div className="wrapper" style={ wrapperStyle }>
                <div className="homeContainer" style={ homeContainerStyle }> 
                    <h2 style={ headerTwoStyle } >KLIR Tweets helps you</h2>
                    <h1 style={ headerOneStyle }>Search tweets more efficiently,</h1>
                    <h1 style={ headerOneStyle }>Save your favorite tweets to read them later,</h1>
                    <h1 style={ headerOneStyle }>See live tweets for any keyword.</h1>
                </div>

                <div className="callToAction" style={ callToActionStyle }>
                    <Button variant="outline-secondary">
                        <Link className="loginLink" style={ loginLinkStyle } to="/login">Login</Link>
                    </Button>
                    
                    {' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}

                    <Button variant="outline-warning">
                        <Link className="registerLink" style={ registerLinkStyle } to="/register">Register</Link>
                    </Button>

                </div>
                
            </div>
        )
    }
}

const homeContainerStyle = {
    padding: '50px',
    textAlign: 'left',
    background: '#1da1f2'  
}

const callToActionStyle = {
    padding: '50px',
    textAlign: 'center',
    background: '#1da1f2',
    marginTop: "0" 
}

const loginLinkStyle = {
    color: "#fff"
}

const registerLinkStyle = {
    color: "#fff"
}


const headerTwoStyle = {
    marginBottom: '20px',
    color: '#fff',
    fontFamily: 'Helvetica Neue LT,Helvetica Neue,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif',
    fontWeight: '700',
    fontSize: '1.5rem',
    lineHeight: '1.5rem',
    letterSpacing: '0',
    opacity: '.6',
    transition: 'opacity .5s linear 3s'
}

const headerOneStyle = {
    fontFamily: 'Helvetica Neue LT,Helvetica Neue,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif',
    fontWeight: '700',
    fontSize: '4.5rem',
    lineHeight: '4.5rem',
    letterSpacing: '-.025rem',
    paddingTop: '1.5rem',
    color: '#fff'
}

const wrapperStyle = {
    // width: "100%",
    margin: 0,
    
}

export default Home;