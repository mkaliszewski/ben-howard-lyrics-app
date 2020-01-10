import React, {useState} from "react";
import InstagramIcon from '../../assets/instagram.png';
import "./about-icon.styles.scss";

const AboutIcon = ({ name, lastName, insta, url }) => {
    
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="about-icon">
      <div
        className="about-icon__div about-icon__div-front "
        style={{ backgroundImage: `url(${url})` }}
      >
      <a className="about-icon__anchor" href={insta} alt="Instagram"><img src={InstagramIcon} alt="Instagram icon"/></a>
        <h3>
          {name} {lastName}
        </h3>
      </div>
      <div onClick={() => setIsClicked(!isClicked)} className={ isClicked ? `about-icon__div about-icon__div-back about-icon-translate` : `about-icon__div about-icon__div-back`}>
      <div className="about-icon__div-paragraph"><p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      ac bibendum felis. Suspendisse pulvinar non diam nec accumsan.
    </p></div>
        
        <div className="about-icon__div-heading"><h3>Read more</h3></div>
      </div>
    </div>
  );
};

export default AboutIcon;
