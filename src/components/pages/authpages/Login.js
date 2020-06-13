import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
class Login extends Component {

    state= {
        emailInput: "",
        passwordInput: "",
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ emailInput: "", passwordInput: "",});
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    

    render() {
        return (
            <div>
                <h2 style={ accountHeaderStyle } className="accountHeader"> Log in </h2>

                <Form onSubmit={ this.handleSubmit } style={ accountFormStyle } className="accountForm">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="emailInput"
                            placeholder="khaled@khaled.com" 
                            onChange={ this.handleChange }
                            value={ this.state.emailInput }
                        />
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>

                        <Form.Control 
                            type="password" 
                            name="passwordInput"
                            placeholder="*********"  
                            onChange={ this.handleChange }
                            value={ this.state.passwordInput }
                        />
                    </Form.Group>

                    
                    <Button 
                        variant="primary" 
                        type="submit" 
                        name="submitAccountButton"
                        style={ submitAccountButtonStyle } 
                         
                    >
                        Log in
                    </Button>
                    <Link to="/reset" style={ resetLinkStyle }>Reset your password</Link>
                </Form>
            </div>
        )
    }
}

const resetLinkStyle = {
    margin: "50px auto"
}


const accountHeaderStyle = {
    width: "60%",
    margin: "50px auto", 
    display: "flex",
    wrap: "nowrap",
    justifyContent: "space-around"
}

const accountFormStyle = {
    width: "40%",
    margin: "50px auto", 
    display: "flex",
    flexDirection: "column",
    border: "5px solid #f5f8fa",
    padding: "20px",
    minWidth: "432px"
    // justifyContent: "space-around"
}

const submitAccountButtonStyle = {
    width: '30%',
    margin: "auto"
}

export default Login;