import React from "react";
import "./Mylist.css";

function Mylist() {
  return (
    <div className="mylist">
     
  <div className="form1">
      <div class="form-row justify-content-center">
    <div class="form-group col-md-3 ">
      <label >First Name</label>
      <input  class="form-control"/>
    </div>
    <div class="form-group col-md-3">
      <label >Last Name</label>
      <input class="form-control"/>
    </div>
  </div>
  <div className="form-row justify-content-center">
  <div class="form-group col-md-6">
    <label>Email</label>
    <input class="form-control" placeholder="Enter your email id"/>
  </div>
  </div>
  <div class="form-row justify-content-center">
    <div class="form-group col-md-3">
      <label for="inputEmail4">Username</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Add username"/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</div>
    </div>
    
  );
}

export default Mylist;
