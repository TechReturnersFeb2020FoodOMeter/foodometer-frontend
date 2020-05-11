import React, { useState,setState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Mylist from "./Pages/Mylist";
import Home from "./Home";
import List from "./List";
import axios from "axios";


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  const [loggedInStatus,setloggedInStatus]= useState("Not Logged in");
  const [user,setUser]=useState({});


  // const loginUser = (usernametext, passwordtext) => {
  //   axios.post("https://k7re4kzp33.execute-api.eu-west-1.amazonaws.com/dev/foodometer",{
  //     username: usernametext,
  //     password: passwordtext
  //   })
  //   .then(response=>{
  //    console.log("Login Successful",response.data);
  //    alert("logged in")
    
  //   })
  //   .catch(err=>{
  //     console.log("Error adding the task",err);
      
  //   })  
  // }
  const handleLoggedIn = () =>{
    setState({
      loggedInStatus : "Logged In",
      user : {},
    })
  }
  
  return (
    <div className="App">

      <Header />
      <main>
        
        <Router>
          <Switch>
            <Route 
            exact 
            path="/" 
            render = {props=>(
              <Home {...props} handleLoggedIn = {handleLoggedIn} loggedInStatus = {loggedInStatus}/>
            )}/>
            <Route 
            exact 
            path="/List" 
            render = {props=>(
              <List {...props} loggedInStatus = {loggedInStatus}/>
            )}/>
            
          </Switch>
        </Router>
        { loggedInStatus ? 
        (<div>
        <h5>Don't have an account! Register One!</h5>
        <Router>
          <Link to="/Mylist" className="btn btn-primary">Register</Link>
          <Switch>
            <Route path="/Mylist" component={Mylist} />
          </Switch>
        </Router></div>) : null}
        
      </main>
      <Footer />

    </div>
  );
}

export default App;
