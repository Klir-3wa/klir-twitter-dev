import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class Account extends Component {

    state= {
        emailInput: "",
        passwordInput: "",
        elementEnabled: "true"
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    toggleForm = (e) => {
        if(e.target.checked) {
            this.setState({ elementEnabled: false });
        } else {
            this.setState({ elementEnabled: true });
        }
    }

    render() {
        return (
            <div>
                <h2 style={ accountHeaderStyle } className="accountHeader"> Manage your account </h2>

                <Form onSubmit={ this.handleSubmit } style={ accountFormStyle } className="accountForm">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="emailInput"
                            placeholder="khaled@khaled.com" 
                            disabled={this.state.elementEnabled}  
                            onChange={ this.handleChange }
                        />
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>

                        <Form.Control 
                            type="password" 
                            name="passwordInput"
                            placeholder="*********" 
                            disabled={this.state.elementEnabled} 
                            onChange={ this.handleChange }
                        />

                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                        <Form.Check 
                            type="checkbox" 
                            name="checkboxInput"
                            label="Update your email and password" 
                            onClick={ this.toggleForm }
                        />
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit" 
                        name="submitAccountButton"
                        style={ submitAccountButtonStyle } 
                        disabled={this.state.elementEnabled} 
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
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

export default Account;