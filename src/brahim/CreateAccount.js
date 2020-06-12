import React, { Component } from "react";
import twitterLogo from "./twitter2.jpg";
import axios from "axios";

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  CreateAccount = (event) => {
    event.preventDefault();


    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user);
    
    console.log("before axios")

    axios.post(`http://127.0.0.1:8000/api/register`, {name: user.name, email: user.email,password: user.password, })
    .then((res) => {
      console.log("hello");
      });

    // console.log("after axios")
  };

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
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
          <img style={{ width: "100%" }} src={twitterLogo} alt="twitterLogo" />
        </div>

        <div>
          <h4 style={{ textAlign: "center" }}>Create your account</h4>
        </div>
        <form onSubmit={this.CreateAccount}>
          <fieldset>
            <div class="form-group">
              {/* <label for="exampleInputPassword1">Password</label> */}
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                style={{ borderBottom: "2px solid" }}
                value={this.state.name}
                onChange={this.changeName}
              />
            </div>

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
            </div>

            <div class="form-group">
              {/* <label for="exampleInputPassword1">Password</label> */}
              <input
                type="password"
                name="wpassord"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                style={{ borderBottom: "2px solid" }}
                onChange={this.changePassword}

              />
            </div>

            <div>
              <button
                type="submit"
                style={{ padding: "7px", width: "20%" }}
                class="badge badge-pill badge-info"
              >
                Register
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
