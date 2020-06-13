import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div className="notFoundContainer" style={ notFoundContainerStyle }>
                <h1 style={ notFoundHeaderStyle }>Page Not Found</h1>
                <p style={ notFoundParagStyle }>Sorry we couldn't find the page your are looking for</p>
                <Button style={notFoundSubmitStyle}>
                    <Link style={ linkStyle } to="/">Go Back To Home Page</Link>
                </Button>
            </div>
        )
    }
}

const notFoundContainerStyle = {
    width: "60%",
    margin: "auto",
    display: "flex",
    flexDirection: "column"
}

const notFoundParagStyle = {
    width: "60%",
    minWidth: "200px",
    margin: "auto",
    textAlign: "center"
}

const notFoundSubmitStyle = {
    width: "25%",
    minWidth: "200px",
    margin: "auto",
    textAlign: "center",
    marginTop: "20px"
}

const notFoundHeaderStyle = {
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

export default NotFound
