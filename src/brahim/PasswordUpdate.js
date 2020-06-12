import React, { Component } from "react";
import twitterLogo from "./twitter2.jpg";

export default class CreateAccount extends Component {
  render() {
    return (
      <div
        className="container rounded"
        style={{ width: "40%", border: "1px Gray solid", padding: "20px" }}
      >
        
        <div>
          <h4 style={{ textAlign: "center" }}>Find Your Twitter Account</h4>
        </div>
        <form>


          <fieldset>
            
          <div class="form-group">
              <label for="exampleInputEmail1">Enter your email or username</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{ borderBottom: "2px solid" }}
              />
            </div>

            <div>
              <button
                type="submit"
                style={{ padding: "7px", width:"20%" }}
                class="badge badge-pill badge-info"
              >
                Search
              </button>


             
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
