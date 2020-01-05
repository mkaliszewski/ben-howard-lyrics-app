import React from 'react';


import './toggle-button.styles.scss'
import { connect } from 'react-redux';

import {toggleSidedrawerHidden} from '../../redux/toolbar/toolbar.actions'

const ToggleButton = ({toggleSidedrawerHidden})=> (
    <button onClick={toggleSidedrawerHidden} className="togggle-button">
        <div className="togggle-button_line"/>
        <div className="togggle-button_line"/>
        <div className="togggle-button_line"/>
    </button>
);



const mapDispatchToProps = dispatch => ({
    toggleSidedrawerHidden: () => dispatch(toggleSidedrawerHidden())
  });

export default connect(null, mapDispatchToProps) (ToggleButton);