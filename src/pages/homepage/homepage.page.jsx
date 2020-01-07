//libs
import React from "react";
//styles
import "./homepage.styles.scss";
//components
import CustomButton from '../../components/custom-button/custom-button'
import GuitarPicture from "../../assets/guitar.png";

const Homepage = () => {
  const pageName = "albums"
  return (
    <main className="homepage">
      <div className="homepage__img-container">
        <div
          className="homepage__image"
          style={{ backgroundImage: `url(${GuitarPicture})` }}
        />
        <div className="homepage__circle-1" />
      </div>
      <div className="homepage__heading-container">
        <h1>Ben Howard Lyrics</h1>
        <h2>Place where music meets you</h2>
        <CustomButton pageName={pageName} buttonClass="homepage">Start Now</CustomButton>
      </div>
      <div className="homepage__circle"/>
    </main>
  );
};

export default Homepage;
