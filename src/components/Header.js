import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = function () {
  const [loginState, setLoginState] = React.useState("Login");
  function setLogoutLoginText() {
    if (loginState === "Login") {
      setLoginState("Logout");
    } else {
      setLoginState("Login");
    }
  }

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="navbar">
        <ul className="listOfNavItems">
          <li><Link className="noUnderLine" to='/'>Home</Link></li>
          <li><Link className="noUnderLine" to='/about'>About Us</Link></li>
          <li><Link className="noUnderLine" to='/contactus'>Contact Us</Link></li>
          <li>Cart</li>
          <li>Profile</li>
          <button className="loginButton" onClick={setLogoutLoginText}>
            {loginState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
