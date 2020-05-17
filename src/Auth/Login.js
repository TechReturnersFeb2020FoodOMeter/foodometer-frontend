import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }



  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { username, password } = this.state;

    axios
      .post(
        "https://k7re4kzp33.execute-api.eu-west-1.amazonaws.com/dev/foodometer",
        {
            username: username,
            password: password
          }
      )
      .then(response => {
          this.props.handleSuccessfulAuth(response.data);
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
<div className="login">
  
<form className="shadow" onSubmit={this.handleSubmit}>
<h4 className="pt-2 py-2">Login</h4>
    <div className="form-row justify-content-center">
        <div className="form-group mx-1">
        <span class="input-group-addon"><FontAwesomeIcon icon = {faUser}/></span>
            <input
            type="username"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          
        </div>
        </div>
        <div className="form-row justify-content-center">
        <div className="form-group mx-1">
        <span class="input-group-addon"><FontAwesomeIcon icon = {faKey} /></span>
            <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </div>
    </div>
    <div className="form-row justify-content-center">
    <div className="mx-1">
    <button type="submit" className="btn btn-info my-2 mb-4">Login</button>
    </div></div>
</form>
</div>


    );
  }
}