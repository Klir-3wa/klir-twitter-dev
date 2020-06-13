import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div style={footerStyle}>
                <p>All rights reserved - KLIR Team 2020</p>
            </div>
        )
    }
}

const footerStyle = {
    width: "100%",
    height: "40px",
    textAlign: "center",
    color: "#fff", 
    background: "#1da1f2",
    position: 'fixed',
    left: '0',
    bottom: '0',
}
export default Footer;
