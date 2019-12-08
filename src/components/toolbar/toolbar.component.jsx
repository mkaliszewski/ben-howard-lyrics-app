import React from "react";
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectToolbarIsOpen } from '../../redux/toolbar/toolbar.selectors'
import Header from "../header/header.component";
import SideDrawer from "../side-drawer/side-drawer.component";
import Backdrop from "../backdrop/backdrop.component";



const Toolbar = ({ toolbarIsOpen, currentUser, dispatch }) =>{
    let backdrop;

    if(toolbarIsOpen){
        backdrop = <Backdrop/>
    }

    return (
      <div>
        <Header currentUser={currentUser}/>
        <SideDrawer/>
        {backdrop}
      </div>
    );
}


const mapStateToProps = createStructuredSelector({
  toolbarIsOpen: selectToolbarIsOpen
})


export default connect(mapStateToProps)(Toolbar);
