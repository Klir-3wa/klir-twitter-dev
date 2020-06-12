import React, { Component } from "react";
import twitterLogo from "./twitter.jpg";
import axios from 'axios';
export default class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
        email: "",
        password: "",
  
         
    };
  }



  logIn = (event)=>{
    event.preventDefault();
    
  const user = {
      email: this.state.email,
      password: this.state.password,
  }

  console.log(user);
  console.log("before axios")

  axios.post(`http://127.0.0.1:8000/api/login`, { email:user.name, password:user.password })
  .then(res=>{
       console.log(res);
       console.log("inside axios");
  });

  console.log("after axios")

  };

  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  changePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };


  render() {
    return (
      <div
        className="container rounded"
        style={{ width: "40%", border: "1px Gray solid", padding: "20px" }}
      >
        <div>
          <img style={{ width: "100%" }} src={twitterLogo} alt="hhh" />
        </div>
        <div>
          <h4>See what's happening in the world right now</h4>
        </div>
        <form>
          <fieldset>
            <div class="form-group">
              {/* <label for="exampleInputEmail1">Email address</label> */}
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                style={{ borderBottom: "2px solid" }}
                onChange={this.changeEmail}

              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              {/* <label for="exampleInputPassword1">Password</label> */}
              <input
                type="password"
                name="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                style={{ borderBottom: "2px solid" }}
                onChange={this.changePassword}

              />
            </div>

            <div>
              <a href="PasswordUpdate" style={{ color: "blue" }}>
                Forgot password ?
              </a>
            </div>
            <div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "15px",
                  marginTop: "10px",
                  color: "blue",
                }}
                class="badge badge-pill badge-secondary"
                onClick={this.logIn}
              >
                Log in
              </button>

              <p style={{ textAlign: "center" }}>Or</p>

              <a
                style={{ width: "100%", padding: "15px" }}
                class="badge badge-pill badge-info"
                href="CreateAccount"
              >
                Sign up
              </a>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
