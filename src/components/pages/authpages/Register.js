import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
class Register extends Component {

    state= {
        textInput: "",
        emailInput: "",
        passwordInput: "",
        confirmPasswordInput: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ emailInput: "", passwordInput: "", textInput: "", confirmPasswordInput: ""});
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    

    render() {
        return (
            <div>
                <h2 style={ accountHeaderStyle } className="accountHeader"> Create a new account </h2>

                <Form onSubmit={ this.handleSubmit } style={ accountFormStyle } className="accountForm">
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="textInput"
                            placeholder="Lahcen Ibrahim" 
                            onChange={ this.handleChange }
                            value={ this.state.textInput }
                        />
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="emailInput"
                            placeholder="brahim@lahcen.com" 
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

                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>

                        <Form.Control 
                            type="password" 
                            name="confirmPasswordInput"
                            placeholder="*********"  
                            onChange={ this.handleChange }
                            value={ this.state.confirmPasswordInput }
                        />
                    </Form.Group>

                    
                    <Button 
                        variant="primary" 
                        type="submit" 
                        name="submitAccountButton"
                        style={ submitAccountButtonStyle } 
                         
                    >
                        Create account
                    </Button>
                    
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

export default Register;