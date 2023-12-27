import { useState } from "react";
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom"
import { FaBuilding, FaHouseDamage, FaPhoneAlt, FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";

const Title = () => {
    return(
    <a href="/">
    <img
    className="logo"
    alt="logo"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcS3p2br_bDD1B-YxTuoJPYItVv3iP4-4uuQ&usqp=CAU"
    />
    </a>
    );
};

const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);

const cartItems = useSelector(store => store.cart.items);

  const navigate = useNavigate();
  return (
   
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> <FaHouseDamage className="icons" /> Home</Link>
          </li>
          <li>
            <Link to="/about"> <FaBuilding className="icons" /> About</Link>
          </li>
          <li>
            <Link to="/contact"> 
            <FaPhoneAlt className="icons" /> Contact</Link>
          </li>
          <li>
            <Link to="/cart">
            <FaShoppingBag className="icons" /> {cartItems.length}
            </Link>
            </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
               🔴 Logout 
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
               🟢 Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
  
  export default Header;