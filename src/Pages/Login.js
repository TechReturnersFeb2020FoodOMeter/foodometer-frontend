import React from "react";
import "./login.css";

function Login() {
    return (

        <div className="login">
            <form className="shadow my-3" >
                <div class="form-row justify-content-center">
                    <div class="form-group mx-2">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" placeholder="Enter email" id="email" />
                    </div>
                    </div>
                    <div class="form-row justify-content-center">
                    <div class="form-group mx-2">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" placeholder="Enter password" id="pwd" />
                    </div>
                </div>
                <div className="mx-2">
                <button type="submit" class="btn btn-primary my-4">Submit</button>
                </div>
                
            </form>
        </div>
    );
}
export default Login