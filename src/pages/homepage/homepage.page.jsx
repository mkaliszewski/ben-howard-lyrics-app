//libs
import React from "react";
//styles
import "./homepage.styles.scss";
//components

import Icon_1 from "../../assets/Icon_1.svg";
import Icon_2 from "../../assets/Icon_2.svg";
import Icon_3 from "../../assets/Icon_3.svg";
import HomepageFigure from '../../components/homepage-figure/homepage-figure.component'

const Homepage = ({ history, match }) => {
  return (
    <main className="homepage__main">
      <div className="homepage__hero">
        <div className="homepage__div--greeting">
          <h2>Welcome to</h2>
        </div>
        <div className="homepage__div--content">
          <span>
            <h2>Ben Howard Lyrics</h2>
          </span>
        </div>
        <span className="homepage__span"><h3>Where amazing happens</h3></span>
      </div>

      <div className="homepage__content">
        <HomepageFigure id={1} imgUrl={Icon_1} category="albums" description="Check out all of the albums"/>
        <HomepageFigure id={2} imgUrl={Icon_2} category="songs" description="Check out all of the songs"/>
        <HomepageFigure id={3} imgUrl={Icon_3} category="signup" description="Do you like our page? Sign up"/>

      </div>
    </main>
  );
};

export default Homepage;
