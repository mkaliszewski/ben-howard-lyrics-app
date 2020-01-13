import React from "react";
import './slider-card.styles.scss'

const SliderCard= ({activePicture }) => {
  
    const { index, url } = activePicture;
    return (
      <div className="slidercard" id={`card-${index}`}>
          <div
            
            className="slidercard__content"
            style={{ backgroundImage: `url(${url})` }}
          >
          </div>
      </div>
    );
  };
  

export default SliderCard;
  