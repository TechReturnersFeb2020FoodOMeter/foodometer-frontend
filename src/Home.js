import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Registration from "./Auth/Registration";
import Login from "./Auth/Login";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleSuccessfulRegister = this.handleSuccessfulRegister.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    
  }

  handleSuccessfulAuth(data) {
   if (data === "Login Failed"){
    console.log(data);
    alert("Incorrect Username or Password");
   }
   else {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
   }
 
  }

  handleSuccessfulRegister(data) {
    if (data === "User exists"){
     console.log(data);
     alert("Emailid or username already exists!");
    }
    else {
    this.props.handleLogin(data);
     this.props.history.push("/dashboard");
    }
    console.log(data);
   }

  handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  render() {
    return (
      <div>
        {/* <h4>Home</h4>
        <h6>Status: {this.props.loggedInStatus}</h6> */}
        <button  onClick={() => this.handleLogoutClick()}  className="btn btn-primary logout mx-3">Logout</button>
        <div className="row">
            <div className="col-12 col-md-6 py-4">
            
            <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            
            </div>
            
            <div className="col-12 col-md-6">
            
            <h5 className="home_Reg">Don't have an account! Register One!</h5>          
          <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} handleSuccessfulRegister={this.handleSuccessfulRegister}/>
          
            </div>
        </div> 
      </div>
    );
  }
}
