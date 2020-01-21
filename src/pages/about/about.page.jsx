import React, {useState} from "react";

import "./about.styles.scss"
import CustomButton from "../../components/custom-button/custom-button";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectMembersArr } from "../../redux/about/about.selectors";
import AboutIcon from "../../components/about-icon/about-icon.component.jsx";

import Icon1 from "../../assets/Icon_1.svg";
import Icon2 from "../../assets/Icon_2.svg";
import Icon3 from "../../assets/Icon_3.svg";
import Icon4 from "../../assets/Icon_4.svg";
import Icon5 from "../../assets/Icon_5.svg";
import AboutFigure from "../../components/about-figure/about-figure.component";

const AboutPage = ({ members, history }) => {

  const [ isClicked, setIsClicked ] = useState(false);


  return (
    <section className="about-page">
    <div className="about-page__circle-1"/>
    <div className="about-page__circle-2"/>
    <div className="about-page__circle-3"/>
    <div className="about-page__circle-4"/>
    <div className="about-page__circle-5"/>
      <div className="about-page__div-about">
      
          <div className="about-page__div-grid-1">
            <h2>What is this?</h2>
            <p className="about-page-lato-font">
              Hello fellow user! Thank you for visiting our page. This is first
              site ever which contains everything you need as a Ben Howard
              Fan. I hope you will enjoy your experience every single time you visit this page. Have fun!
              <br></br>Check out what you can get by clicking on the button.
              
            </p>
            <div className="about-page__div-grid-1-mobile" >
              <CustomButton  onClick={() => setIsClicked(!isClicked)}buttonClass="button-homepage">{isClicked ? `Hide` : `Check out!`}</CustomButton>
            </div>
          </div>



          <div className={isClicked ? "about-page__div-grid-2 about-page-display" : "about-page__div-grid-2"}>
            <AboutFigure isClicked={isClicked} id="1" iconUrl={Icon1} description="Free music" />
            <AboutFigure isClicked={isClicked} id="2" iconUrl={Icon2} description="All songs lyrics" />
            <AboutFigure isClicked={isClicked} id="3" iconUrl={Icon3} description="Sign up" />
          </div>
        <div className="about-page__div-grid-3" >
          <CustomButton  onClick={() => setIsClicked(!isClicked)}buttonClass="button-homepage">{isClicked ? `Hide` : `Check out!`}</CustomButton>
        </div>
      </div>

      <div className="about-page__div-sign">
      
      <div className="about-page__div-row">
      <h2>Why sign up?</h2>
      <p className="about-page-lato-font">
    If you want to sign up it's always for free! You can join our community and get extra features for example: saving your favourite songs or check how many times you've checked lyrics. It's awesome, isn't it?
    </p>
    <br></br>
    <p className="about-page-lato-font"> If you have an account lets sign in! If you don't have one don't worry, just click on the icon bellow:
    </p>
    
      </div>
      <div className="about-page__div-row-flex">
      <AboutFigure onClick={() => history.push("/signin")} isClicked={true} id="4" iconUrl={Icon4} description="Sign in" />
      <AboutFigure onClick={() => history.push("/signup")} isClicked={true} id="5" iconUrl={Icon5} description="Sign up" />
      </div>
    </div>

      <div className="about-page__div-members">
      
      <div className="about-page__div-row">
      <h2>Band members</h2>
      <p className="about-page-lato-font">
      There are 6 band members of Ben Howard Band. You can get along with them as they are shown in the box underneath. Don’t forget to check their personal info and Instagram!
      </p>
      
      </div>
      <div className="about-page__div-row-grid">
          {members.map(member =>
            <AboutIcon
            key={member.id}
            name={member.name}
            lastName={member.lastName}
            url={member.url}
            insta={member.insta}/>)}
        </div>
      </div>
        

      
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  members: selectMembersArr
});
export default connect(mapStateToProps)(AboutPage);
