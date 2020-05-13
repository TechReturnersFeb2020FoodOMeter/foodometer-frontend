import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./App.css";
import Home from "./Home";
import Dashboard from "./Dashboard";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    //this.handleDelete = this.handleDelete.bind(this);
 
  }

  checkLoginStatus() {
    // axios
    //   .get("http://localhost:3001/logged_in", { withCredentials: true })
    //   .then(response => {
    //     if (
    //       response.data.logged_in &&
    //       this.state.loggedInStatus === "NOT_LOGGED_IN"
    //     ) {
    //       this.setState({
    //         loggedInStatus: "LOGGED_IN",
    //         user: response.data.user
    //       });
    //     } else if (
    //       !response.data.logged_in &
    //       (this.state.loggedInStatus === "LOGGED_IN")
    //     ) {
    //       this.setState({
    //         loggedInStatus: "NOT_LOGGED_IN",
    //         user: {}
    //       });
    //     }
    //   })
    //   .catch(error => {
    //     console.log("check login error", error);
    //   });
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
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data
    });
    console.log(this.state.user);
  }
//   handleDelete(item, event) {
//     axios.delete(`https://k7re4kzp33.execute-api.eu-west-1.amazonaws.com/dev/foodometer/delete/${item}`)
//     .then(response=>{
//         console.log(response);
//         alert('item deleted');
//         //const filtered_Product_List = itemList.filter(product =>{
//           //    return product.item_id !== item;
              
//        // });
//         //setItemList(filtered_Product_List);
//     })
//     .catch(err =>{
//         console.log("Error deleting the product",err);
//     })
//     event.preventDefault();
// }

  render() {
    return (
      <div className="app">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={props => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={props => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  user = {this.state.user}
                  handleDel={this.handleDelete}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}