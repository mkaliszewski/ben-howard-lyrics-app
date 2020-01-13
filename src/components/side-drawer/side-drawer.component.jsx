import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./side-drawer.styles.scss";
import { hideSidedrawer } from "../../redux/toolbar/toolbar.actions";
import { auth } from "../../firebase/firebase.utils";

const SideDrawer = ({ isOpen, hideSidedrawer, currentUser }) => {
  const handleLogOut = () => {
    auth.signOut();
  };
  return (
    <aside
      className={isOpen ? `side-drawer__aside open` : `side-drawer__aside`}
    >
      <button className="side-drawer__button" onClick={hideSidedrawer}></button>
      <div className="side-drawer__div-options">
        <Link onClick={hideSidedrawer} to="/" className="side-drawer__link">
          Home
        </Link>

        <Link
          onClick={hideSidedrawer}
          to="/songs"
          className="side-drawer__link"
        >
          Songs
        </Link>
        <Link
          onClick={hideSidedrawer}
          to="/albums"
          className="side-drawer__link"
        >
          Albums
        </Link>
        <Link
          onClick={hideSidedrawer}
          to="/about"
          className="side-drawer__link"
        >
          About
        </Link>
        {currentUser ? (
          <Link
            onClick={hideSidedrawer}
            to={`/profile/${currentUser.id}`}
            className="side-drawer__link"
          >
            Profile
          </Link>
        ) : (
          <Link onClick={hideSidedrawer} to="/signin" className="side-drawer__link">
            Sign in
          </Link>
        )}

        {currentUser ? (
          <div onClick={() => handleLogOut()} className="side-drawer__link">
            Sign out
          </div>
        ) : (
          <Link
            onClick={hideSidedrawer}
            to="/signup"
            className="side-drawer__link"
          >
            Sign up
          </Link>
        )}
      </div>
    </aside>
  );
};

const mapStateToProps = state => ({
  isOpen: state.toolbar.isOpen,
  currentUser: state.users.currentUser
});

const mapDispatchToProps = dispatch => ({
  hideSidedrawer: () => dispatch(hideSidedrawer())
});
export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
