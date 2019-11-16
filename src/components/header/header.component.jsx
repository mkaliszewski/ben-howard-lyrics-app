import React from "react";
import { Link } from "react-router-dom";

import ToggleButton from '../toggle-button/toggle-button.component'

import "./header.styles.scss";
import Logo from "../../assets/Logo.png";
import LogoYT from "../../assets/LogoYT.png";
import LogoSpotify from "../../assets/LogoSpotify.png";

const Header = ({ sideDrawerClick }) => (
  <div className="header">
    <div className="header__navitems-left">
      <div onClick={sideDrawerClick} className="header__button-container">
        <ToggleButton className="header__button"/> 
      </div>
      <Link to="/" className="header__logo-container">
        <img src={Logo} alt="logo" className="header__logo" />
      </Link>

      <div className="header__options">
        <Link to="/" className="header__option">
          Home
        </Link>
        <Link to="/songs" className="header__option">
          Songs
        </Link>
        <Link to="/albums" className="header__option">
          Albums
        </Link>
        <Link to="/about" className="header__option">
          About
        </Link>
      </div>
    </div>

    <div className="header__navitems-right">
      <Link to="/" className="header__logo-container">
        <img src={LogoYT} alt="logo" className="header__logo" />
      </Link>
      <Link to="/" className="header__logo-container">
        <img src={LogoSpotify} alt="logo" className="header__logo" />
      </Link>
    </div>
  </div>
);

export default Header;
