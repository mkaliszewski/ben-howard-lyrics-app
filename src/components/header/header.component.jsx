import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/users/users.selectors";
import ToggleButton from "../toggle-button/toggle-button.component";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser, history, match }) => {



  return (
    <nav className="header">
      <div className="header__div--left">

          <div onClick={() => history.push(`${match.url}`)} className="header__container-logo">
            <Logo />
          </div>
        

        <Link to="/" className="header__link">
          Home
        </Link>
        <Link to="/songs" className="header__link">
          Songs
        </Link>
        <Link to="/albums" className="header__link">
          Albums
        </Link>
        <Link to="/about" className="header__link">
          About
        </Link>
      </div>

      {currentUser ? (
        <div className="header__div--right">
          <Link to={`/profile/${currentUser.id}`} className="header__link">
            Profile
          </Link>
          <div onClick={() => auth.signOut()} className="header__link">
            Sign out
          </div>
        </div>
      ) : (
        <div className="header__div--right">
          <Link to="/signin" className="header__link">
            Sign in
          </Link>
          <Link to="/signup" className="header__link">
            Sign up
          </Link>
        </div>
      )}
      <nav className="header--mobile">
        <ToggleButton />
        <div  onClick={() => history.push(`${match.url}`)}  className="header__container-logo">
          <Logo />
        </div>
      </nav>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(Header));
