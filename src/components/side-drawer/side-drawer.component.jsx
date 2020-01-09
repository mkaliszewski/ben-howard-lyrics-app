import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import "./side-drawer.styles.scss";
import {hideSidedrawer} from '../../redux/toolbar/toolbar.actions';

const SideDrawer = ({ isOpen, hideSidedrawer }) => {

  return (
    <aside className={isOpen ? `side-drawer__aside open` : `side-drawer__aside`}>
    
    <button className="side-drawer__button" onClick={hideSidedrawer}></button>
    <div className="side-drawer__div-options">
      <Link onClick={hideSidedrawer} to="/" className="side-drawer__link">
        Home
      </Link>

      
      <Link onClick={hideSidedrawer} to="/songs" className="side-drawer__link">
        Songs
      </Link>
      <Link onClick={hideSidedrawer} to="/albums" className="side-drawer__link">
        Albums
      </Link>
      <Link onClick={hideSidedrawer} to="/about" className="side-drawer__link">
        About
      </Link>
      <Link onClick={hideSidedrawer} to="/signin" className="side-drawer__link">
          Sign in
        </Link>
      <Link onClick={hideSidedrawer} to="/signup" className="side-drawer__link">
        Sign up
      </Link>
    </div>
    </aside>
  );
};


const mapStateToProps = state =>({
  isOpen: state.toolbar.isOpen
})

const mapDispatchToProps = dispatch =>({
    hideSidedrawer: () =>dispatch(hideSidedrawer())
})
export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
