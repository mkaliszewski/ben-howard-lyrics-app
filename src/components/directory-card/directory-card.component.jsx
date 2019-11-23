//libs
import React from "react";
import Tilt from "react-tilt";
//styles
import './directory-card.style.scss'



const DirectoryCard = ({ url }) => (
  <div className="directory-card__div">
  
  
    <Tilt
      classname = "tilt__div"
      options={{
        max: 15,
        perspective: 4000
      }}
    >
      <img className="directory-card__img" src={`${url}`}  />
    </Tilt>
    </div>
);

export default DirectoryCard;
