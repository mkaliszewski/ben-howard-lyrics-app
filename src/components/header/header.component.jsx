import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/users/users.selectors'
import ToggleButton from "../toggle-button/toggle-button.component";
import { auth } from '../../firebase/firebase.utils'
import "./header.styles.scss";
import Logo from "../../assets/Logo.svg";
import LogoYT from "../../assets/LogoYT.svg";
import LogoSpotify from "../../assets/LogoSpotify.svg";

class Header extends React.Component{

render(){
  const { currentUser } = this.props;
  return(
    <div className="header">
      <div className="header__navitems-left">
        <div
          className="header__button-container"
        >
          <ToggleButton className="header__button" />
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
        <div className="header__options">
  
        {
          
          currentUser ? 
         ( 
           <div className="header__options">
           <Link to={`/profile/${currentUser.id}`} className="header__option">Profile</Link>
          <div onClick={() => auth.signOut()} className="header__option">Sign out</div>
           </div>
          

         
         )
          :
  
          (
            <div className="header__options">
            <Link to="/signin" className="header__option">
            Sign in
          </Link>
          <Link to="/signup" className="header__option">
            Sign up
          </Link>
            </div>
            
  
          )
  
        }
          
        </div>
        <a href="https://www.youtube.com/channel/UC7P46taO0CdI8Gy44P1X2yA" target="_blank" rel="noopener noreferrer" className="header__logo-container">
          <img src={LogoYT} alt="logo" className="header__logo" />
        </a>
        <a href="https://open.spotify.com/artist/5schNIzWdI9gJ1QRK8SBnc?si=kCBwf1hGQKqdZKoOY63lTw" target="_blank" rel="noopener noreferrer" className="header__logo-container">
          <img src={LogoSpotify} alt="logo" className="header__logo" />
        </a>
      </div>
    </div>
  );
  
}

} 

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


export default connect(mapStateToProps)(Header);
