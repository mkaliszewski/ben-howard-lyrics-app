import React from 'react'

import './custom-button.scss'
import { withRouter } from 'react-router-dom';

const Custombutton = ({pageName, children, buttonClass, history, match }) =>(
    <button onClick={pageName ? (() => history.push(`${match.url}${pageName}`)): (null)} className={`button ${buttonClass}`}>
        {children}
    </button>
)


export default withRouter(Custombutton);