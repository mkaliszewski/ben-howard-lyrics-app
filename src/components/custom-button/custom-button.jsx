import React from 'react'

import './custom-button.scss'

const Custombutton = ({ children, buttonClass }) =>(
    <button className={`button ${buttonClass}`}>
        {children}
    </button>
)


export default Custombutton;