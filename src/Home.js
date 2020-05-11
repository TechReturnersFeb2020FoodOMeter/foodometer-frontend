import React from "react";
import Login from "./Pages/Login";

function Home(props){
    
    const handleSuccessfulAuth = () =>{
       
        props.history.push("/List");
      }
    return (
        <div>
          <h1>Home</h1>
          <h1>Status: {props.loggedInStatus}</h1>
          <Login handleSuccessfulAuth={handleSuccessfulAuth} />
        </div>
    );
}
export default Home;