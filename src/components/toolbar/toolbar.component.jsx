import React from "react";

import Header from "../header/header.component";
import SideDrawer from "../side-drawer/side-drawer.component";
import Backdrop from "../backdrop/backdrop.component";

class Toolbar extends React.Component {
    state = {
        sideDrawerOpen: false
    }
    sideDrawerClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }    

    backdropClickHandler = () =>{
        this.setState({sideDrawerOpen: false})
    }
   
  render() {
    let backdrop

    if( this.state.sideDrawerOpen){
        backdrop = <Backdrop backdropClick = {this.backdropClickHandler}/>
    }

    return (
      <div>
        <Header sideDrawerClick = {this.sideDrawerClickHandler}/>
        <SideDrawer isOpen = {this.state.sideDrawerOpen}/>
        {backdrop}
      </div>
    );
  }
}

export default Toolbar;
