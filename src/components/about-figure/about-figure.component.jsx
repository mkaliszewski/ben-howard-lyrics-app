import React from 'react';

import './about-figure.styles.scss'


const AboutFigure = ({iconUrl, description, id, isClicked, ...otherProps }) =>{

    return(
        <div className={isClicked ? `about-figure about-figure-${id} about-figure-animation`: `about-figure about-figure-${id}`
    } {...otherProps}>
        <img src={iconUrl} alt="Icon"/>

        <h3>{description}</h3>
        
        </div>
    )

}


export default AboutFigure;