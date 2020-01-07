import React from "react";
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectToolbarIsOpen } from '../../redux/toolbar/toolbar.selectors'
import Header from "../header/header.component";
import SideDrawer from "../side-drawer/side-drawer.component";



const Toolbar = ({ toolbarIsOpen, dispatch }) =>{

    return (
      <div>
        <Header/>
        <SideDrawer/>

      </div>
    );
}


const mapStateToProps = createStructuredSelector({
  toolbarIsOpen: selectToolbarIsOpen
})


export default connect(mapStateToProps)(Toolbar);
