//libs
import React, { Component } from "react";

//styles
import "./homepage.styles.scss";
//components

import Icon_1 from "../../assets/Icon_1.svg";
import Icon_2 from "../../assets/Icon_2.svg";
import Icon_3 from "../../assets/Icon_3.svg";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage__div">
        <div
          className="homepage__div-header"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")`
          }}
        >
          <span className="homepage__div-header__span">
            <h1>
              <em>Ben Howard Lyrics</em>
            </h1>
          </span>
        </div>
        <div className="homepage__div-content">
          <div className="homepage__div-content-container">
            <img src={Icon_1} alt="Lyrics" />
            <span className="homepage__div-content-container__span">
              <h3>Looking for lyrics?</h3>
            </span>
            <span className="homepage__div-content-container__span">
              <p>Here is everything you need!</p>
            </span>
          </div>
          <div className="homepage__div-content-container">
            <img src={Icon_3} alt="Music" />
            <span className="homepage__div-content-container__span">
              <h3>Do you want listen to music?</h3>
            </span>
            <span className="homepage__div-content-container__span">
              <p>You are in a right place in a right time!</p>
            </span>
          </div>
          <div className="homepage__div-content-container">
            <img src={Icon_2} alt="Form" />
            <span className="homepage__div-content-container__span">
              <h3>Wanna sign up?</h3>
            </span>
            <span className="homepage__div-content-container__span">
              <p>At Ben Howard Lyrics page it's always free and easy!</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
