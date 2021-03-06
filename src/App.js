import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Dashboard from "./Dashboard";



const divStyle = {
    width: '100%',
    height:"800px",
    backgroundImage: `url(${"./brooke-lark-08bOYnH_r_E-unsplash.jpg"})`,
    backgroundSize:'cover'
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    //this.handleDelete = this.handleDelete.bind(this);
  }

  checkLoginStatus() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data,
    });
    console.log(this.state.user);
  }
  
  render() {
    return (
      <div className="app" style={divStyle}>
        
       
          <div id="main" className="">
          
          <HashRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
             
              path={"/dashboard"}
              render={(props) => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  user={this.state.user}
                  
                />
              )}
            />
            <Route component={Home}/>
          </Switch>
        </HashRouter>
        </div>
       
        {/* <Footer /> */}
      </div>
    );
  }
}
