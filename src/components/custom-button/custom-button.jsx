import React from 'react'

import './custom-button.scss'


const Custombutton = ({pageName, children, buttonClass, ...otherProps }) =>(
    <button {...otherProps} className={`button ${buttonClass}`}>
        {children}
    </button>
)


export default Custombutton;