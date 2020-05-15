import React from "react";
import "./Mylist.css";

function Mylist() {
  return (
    <div className="mylist">
     
  <div className="form1">
      <div className="form-row justify-content-center">
    <div className="form-group col-md-3 ">
      <label >First Name</label>
      <input  className="form-control"/>
    </div>
    <div className="form-group col-md-3">
      <label >Last Name</label>
      <input className="form-control"/>
    </div>
  </div>
  <div classNameName="form-row justify-content-center">
  <div className="form-group col-md-6">
    <label>Email</label>
    <input className="form-control" placeholder="Enter your email id"/>
  </div>
  </div>
  <div className="form-row justify-content-center">
    <div className="form-group col-md-3">
      <label for="inputEmail4">Username</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Add username"/>
    </div>
    <div className="form-group col-md-3">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</div>
    </div>
    
  );
}

export default Mylist;
