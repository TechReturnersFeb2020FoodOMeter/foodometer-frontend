import React, {useState} from "react";
import "./login.css";
import axios from "axios";

function Login(props) {
    const [usernametext, setUsername] = useState("");
    const [passwordtext, setPassword] = useState("");
 
      
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        
    }

    const handleLogin = () => {
    
            // axios.post("https://k7re4kzp33.execute-api.eu-west-1.amazonaws.com/dev/foodometer",{
            //   username: "jjacob",
            //   password: "jj123"
            // })
            // .then(response=>{
            //     console.log("success")
            //  if(response.data.status === 200){
            //      props.handleSuccessfulAuth();
            //  }
            
            // })
            // .catch(err=>{
            //   console.log("Error adding the task",err);
              
            // })  
        
            props.handleSuccessfulAuth();
    
    }
    return (

        <div className="login">
            <form className="shadow my-3" >
                <div className="form-row justify-content-center">
                    <div className="form-group mx-2">
                        <label htmlFor="username">Username</label>
                        <input type="username" className="form-control" value={usernametext} placeholder="Enter username" id="username" onChange={handleUsernameChange} />
                    </div>
                    </div>
                    <div className="form-row justify-content-center">
                    <div className="form-group mx-2">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" value={passwordtext} placeholder="Enter password" id="pwd" onChange={handlePasswordChange} />
                    </div>
                </div>
                <div className="mx-2">
                <button type="submit" className="btn btn-primary my-4" onClick={handleLogin}>Submit</button>
                </div>
            </form>
            <h1>{props.loggedInStatus}</h1>
        </div>
    );
}
export default Login;