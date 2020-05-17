import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Registration from "./Auth/Registration";
import Login from "./Auth/Login";
import "./Home.css";

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
     
   
        
        <div className="row" id="Login">
        <div className="col-12 col-md-6 py-4" ></div>
            <div className="col-12 col-md-6 py-4" >
            
            <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            <div id ="register">
            <h6 className="home_Reg">Don't have an account?&nbsp;</h6><h6> 
            <a class="u" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Register
  </a></h6> 
  </div>
  <div class="collapse" id="collapseExample">
  
  <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} handleSuccessfulRegister={this.handleSuccessfulRegister}/>

</div>      
          
          
            </div>
        </div> 
   /* <button  onClick={() => this.handleLogoutClick()}  className="btn btn-primary logout mx-3">Logout</button> */
    );
  }
}
