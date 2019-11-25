import React from 'react'

import './custom-button.scss'

const Custombutton = ({ children }) =>(
    <button className="button">
        {children}
    </button>
)


export default Custombutton;