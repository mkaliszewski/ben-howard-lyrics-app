import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import "./side-drawer.styles.scss";

const SideDrawer = props => {
  let open = props.isOpen ? "open" : "";

  return (
    <div className={`side-drawer__options ${open}`}>
        <div  className={`side-drawer__color-section-top ${open}`}/>
      <h1 className="side-drawer_heading"><em>BH Lyrics</em></h1>
      <Link to="/" className="side-drawer__option">
        Home
      </Link>
      <Link to="/songs" className="side-drawer__option">
        Songs
      </Link>
      <Link to="/albums" className="side-drawer__option">
        Albums
      </Link>
      <Link to="/about" className="side-drawer__option">
        About
      </Link>
      <Link to="/sigin" className="side-drawer__option">
          Sign in
        </Link>
      <Link to="/signup" className="side-drawer__option">
        Sign up
      </Link>
      <div className={`side-drawer__color-section-bottom ${open}`}/>
    </div>
  );
};


const mapStateToProps = state =>({
  isOpen: state.toolbar.isOpen
})

export default connect(mapStateToProps)(SideDrawer);
