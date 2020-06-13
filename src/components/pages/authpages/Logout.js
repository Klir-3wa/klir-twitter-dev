import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Logout extends Component {
    render() {
        return (
            <div className="logoutContainer" style={ logoutContainerStyle }>
                <h1 style={logoutHeaderStyle }>We will miss you</h1>
                <p style={ logoutParagStyle }>thank you for using our service, hope to see you soon</p>
                <Button style={logoutSubmitStyle}>
                    <Link style={ linkStyle } to="/">Go Back To Home Page</Link>
                </Button>
            </div>
        )
    }
}

const logoutContainerStyle = {
    width: "60%",
    margin: "auto",
    display: "flex",
    flexDirection: "column"
}

const logoutParagStyle = {
    width: "60%",
    minWidth: "200px",
    margin: "auto",
    textAlign: "center"
}

const logoutSubmitStyle = {
    width: "25%",
    minWidth: "200px",
    margin: "auto",
    textAlign: "center",
    marginTop: "20px"
}

const logoutHeaderStyle = {
    width: "60%",
    minWidth: "200px",
    margin: "50px auto", 
    display: "flex",
    wrap: "nowrap",
    justifyContent: "space-around",
    textAlign: "center"
}

const linkStyle = {
    color: "#fff",
    textDecoration: "none"
}

export default Logout
