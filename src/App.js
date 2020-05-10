import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Mylist from "./Pages/Mylist";
import Login from "./Pages/Login";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Header />
      <main>
        <Login/>
        <h5>Don't have an account! Register One!</h5>
        <Router>
          <Link to="/Mylist" class="btn btn-primary">Register</Link>
          <Switch>
            <Route path="/Mylist" component={Mylist} />
          </Switch>
        </Router>
      </main>
      <Footer />

    </div>
  );
}

export default App;
