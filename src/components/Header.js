import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = function(){
    return(
      <div className="header">
        <div>
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="navbar">
          <ul className="listOfNavItems">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
    )
  }

export default Header;