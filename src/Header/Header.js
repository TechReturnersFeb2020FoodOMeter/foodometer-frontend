import React from "react";
import "./Header.css";



function Header() {
  return (
    <header>
      <div class="card text-center">
        <div class="card-header"></div>
        <div class="card-body">
          <h1 class="card-title">Food-o-meter</h1>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
        <div class="card-footer text-muted"></div>
      </div>
    </header>
  );
}

export default Header;
