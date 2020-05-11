import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Mylist from "./Pages/Mylist";
import Login from "./Pages/Login";
import ImageUpload from "./Components/ImageUpload";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";


function App() {

  const [apiData, updateApiData] = useState([]);

  return (
    <div className="App">

      <Header />
      <main>
        <Login />
        <h5>Don't have an account! Register One!</h5>
        <Router>
          <Link to="/Mylist" class="btn btn-primary">Register</Link>
          <Switch>
            <Route path="/Mylist" component={Mylist} />
          </Switch>
        </Router>
        <ImageUpload updateApiData={updateApiData} apiData={apiData} />
      </main>
      <Footer />

    </div>
  );
}

export default App;
