import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class UserHome extends Component {
    render() {
        return (
            <div style={{ height: "100vh", background: "#e9ecef"}}>
                <Jumbotron style={jumbotronStyle}>
                    <h1>Welcome Khaled!</h1>
                    <br />
                    <p>
                        You can search Twitter, <br />
                        save your favorite tweets,<br />
                        or keep an eye on your important keyword.
                    </p>
                    <br />
                    <br />
                    <br />
                    <p>
                        <Button variant="primary" size="lg">
                            <Link to="/search" style={ linkStyle }> <h1>Start Exploring</h1> </Link>
                        </Button>
                    </p>
                </Jumbotron>    
            </div>
        )
    }
}

const linkStyle = {
    color: "#fff",
    textDecoration: "none"
}

const jumbotronStyle = {
    height: "100%"
}
export default UserHome;
