import React from 'react'

import './custom-button.scss'
import { withRouter } from 'react-router-dom';

const Custombutton = ({pageName, children, buttonClass, history, match, ...otherProps }) =>(
    <button {...otherProps} className={`button ${buttonClass}`}>
        {children}
    </button>
)


export default withRouter(Custombutton);