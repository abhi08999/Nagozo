import React from "react";
import { NavLink } from "react-router-dom";
import Link from '@material-ui/core/Link'

// Material Ui COmponents
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// css
import "../../Css/navbar.css";
import LogoImg from "../../Assets/Images/logo.png"
// Responsive function
const makeNavResp = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

const Navbar = () => {
  return (
    <div class="topnav" id="myTopnav">
      <NavLink className="navbar-brand" to="/">
      <div className="logo-image">
            <img src={LogoImg} />
      </div>

      </NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Orders</NavLink>
      <NavLink to="/">Profile</NavLink>
      <NavLink to="/">Coupons</NavLink>
      <NavLink to="/">Contact us</NavLink>
      <Link className="icon" aria-label="delete" size="small" onClick={makeNavResp}>
          <MenuIcon fontSize="inherit" />
        </Link>      

    </div>
  );
};

export default Navbar;
