import logo from "../assets/logo.png";
const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={logo} alt="logo-image" />
        </div>
        <div className="nav-items">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Cart</a></li>
            </ul>
        </div>
    </div>
);

export default Header;

