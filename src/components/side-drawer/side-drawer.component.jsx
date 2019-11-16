import React from "react";
import { Link } from "react-router-dom";
import "./side-drawer.styles.scss";
const SideDrawer = props => {
  let open;

 props.isOpen ? (open = "open") : (open = null)
  

  return (
    <div className={`side-drawer__options ${open}`}>
        <div className={`side-drawer__color-section-top ${open}`}/>
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
      <div className={`side-drawer__color-section-bottom ${open}`}/>
    </div>
  );
};

export default SideDrawer;
