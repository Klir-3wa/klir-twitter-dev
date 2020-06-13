import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
class Reset extends Component {

    state= {
        emailInput: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ emailInput: "" });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    

    render() {
        return (
            <div>
                <h2 style={ resetHeaderStyle } className="accountHeader"> Reset password </h2>
                
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
                        <Form.Text className="text-muted">
                            Please insert your email to receive a reset link
                        </Form.Text>
                        
                    </Form.Group>

                    <Button 
                        variant="primary" 
                        type="submit" 
                        name="submitAccountButton"
                        style={ submitAccountButtonStyle }    
                    >
                        Send
                    </Button>
                    <Link to="/login" style={ cancelResetLinkStyle }>Cancel reset</Link>
                    
                </Form>
            </div>
        )
    }
}

const cancelResetLinkStyle = {
    margin: "20px auto"
}

const resetHeaderStyle = {
    width: "60%",
    margin: "50px auto", 
    display: "flex",
    wrap: "nowrap",
    justifyContent: "space-around"
}

// const resetParagraphStyle = {
//     width: "60%",
//     margin: "50px auto", 
//     display: "flex",
//     wrap: "nowrap",
//     justifyContent: "space-around"
// }

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

export default Reset;