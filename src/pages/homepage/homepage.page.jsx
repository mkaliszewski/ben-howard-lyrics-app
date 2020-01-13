//libs
import React, {useState} from "react";
//styles
import "./homepage.styles.scss";
//components
import CustomButton from '../../components/custom-button/custom-button'
import GuitarPicture from "../../assets/guitar.png";



const Homepage = ({ history, match }) => {

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const pageName = "albums"
  return (
    <main className="homepage">
      <div className="homepage__img-container">
        <div 
          className="homepage__image"
          
          style={{ backgroundImage: `url(${GuitarPicture})` }}
        />
        <div className={isClicked ? "homepage__circle-1 open" : "homepage__circle-1"} onClick={() => setIsClicked(!isClicked)}><span className="homepage__span">Let's connect</span></div>
        <div className="homepage__circle-link" onClick={() => history.push(`${match.url}signin`)}/>
      </div>
      <div className="homepage__heading-container">
        <span onMouseEnter={() =>setIsHovered(true)} ><h1>Ben Howard Lyrics</h1></span>
        <h2>Place where music meets you</h2>
        <CustomButton  onClick={() => history.push(`${match.url}albums`)} pageName={pageName} buttonClass="button-homepage">Start Now</CustomButton>
        
      </div>
      <div className={ isHovered ? "homepage__circle-2 circle-hover" : "homepage__circle-2"} />
      <div className={ isHovered ? "homepage__circle-3 circle-hover" : "homepage__circle-3"} />
    </main>
  );
};

export default Homepage;
