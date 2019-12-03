import React from 'react'

import './legend.styles.scss'



const Legend = () =>(
    <div className = "legend">

        <div className="legend__block">
            <div className="legend__block-color1"></div>
            <span className="legend__span"><p>Every Kingdom</p></span>
        </div>

        <div className="legend__block">
            <div className="legend__block-color2"></div>
            <span className="legend__span"><p>I Forget Where We Were</p></span>
        </div>

        <div className="legend__block">
            <div className="legend__block-color3"></div>
            <span className="legend__span"><p>Noonday Dream</p></span>
        </div>
            
        

    </div>
)



export default Legend;