import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import "./Login.js";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  const [{ user, basket }, dispatch] = useStateValue();
  
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <div className="header_logo">
        <img
          className="logo"
          src="data:image/jpeg;base64,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"
          alt=""
        ></img>
      </div>
      <div className="header_right">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <span className="header_right_1">Homepage</span>
        </Link>
        <Link to="/Rentacar" style={{ textDecoration: "none", color: "black" }}>
          <span className="header_right_1">Rent a car</span>
        </Link>
        <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>
          <span onClick = {handleAuthenticaton} className="header_right_2">{user ? "Sign Out" : "Sign In"}</span>
        </Link>
        <Link to="/Basket" style={{ textDecoration: "none", color: "black" }}>
        <ShoppingBasketIcon></ShoppingBasketIcon>
        <span className="basketCount">{basket?.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
