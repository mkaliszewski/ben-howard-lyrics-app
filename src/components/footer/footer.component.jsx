import React from "react";

import "./footer.styles.scss";

import githubLogo from "../../assets/GitHub_Logo.png";
import linkedinLogo from "../../assets/LI-Logo.png";

const Footer = () => {


return(
  <footer className="footer">
      <div className="footer__div">
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

</footer>
);
}
export default Footer;
