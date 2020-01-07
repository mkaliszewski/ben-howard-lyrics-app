import React from "react";

import "./footer.styles.scss";

import githubLogo from "../../assets/GitHub_Logo.png";
import linkedinLogo from "../../assets/LI-Logo.png";
const Footer = () => (
  <div className="footer">
    <div className="footer-info">
      <span className="footer-info__span--created">Page created by: M.Kaliszewski</span>
      <div className="footer-info__div-link-holder">
        <a
          href="https://github.com/mkaliszewski"
          alt="Github"
        >
        <img src={githubLogo} alt="Github"/>
        </a>
        <a
          href="https://www.linkedin.com/in/mikołaj-kaliszewski-803040153"
          alt="Linkedin"
        >
        
        <img src={linkedinLogo} alt="Linkedin"/>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
