import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [userState, setUserState] = useState("Login");

  const changeName = () => {
   (userState === "Login") ? setUserState("Logout") : setUserState("Login");
  };

  useEffect(() => {
    console.log("useEffect called only once") 
  }, []);
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo-image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <button className="login" onClick={changeName}>
            {userState}
          </button>
          <li>
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
