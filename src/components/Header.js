import { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [userState, setUserState] = useState("Login");

  const changeName = () => {
   (userState === "Login") ? setUserState("Logout") : setUserState("Login");
  };
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo-image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
          <button className="login" onClick={changeName}>
            {userState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
