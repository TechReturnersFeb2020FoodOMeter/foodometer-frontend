import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light" id="nav1">
        <div className="row" id="rowhead">
          <div className="col-md-10">
        <h2 id="mainTitle" className="py-3">
          {/* <img src={require("./foodometer-blue-logo.png")} width="200px" height="200px" alt="Foodometer logo"/> */}
          FOOD-O-METER
        </h2>
        </div>
        {/* <div class="navbar-collapse" id="navbarNavDropdown">
        <ul className='navbar-nav'>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Welcome Jacob
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/">
                Logout
              </a>
            </div>
          </li>
          </ul>
        </div> */}
        <div className="col-md-2">
        <div class="navbar-collapse" id="navbarNavDropdown">
        <ul className='navbar-nav'>
          <li nav-item dropdown>
         
          <a
              class="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
               <FontAwesomeIcon icon={faUserCircle} className='mx-2'/>Welcome {props.user}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="drop">
              <a class="dropdown-item" id="logout" href="/">
                Logout
              </a>
            </div>


          </li>
        </ul>

        </div>
        </div>
        </div>
      </nav>
    </div>

  );
}

export default Header;
