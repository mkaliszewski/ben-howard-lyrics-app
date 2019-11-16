import React from 'react';

import './footer.styles.scss'


const Footer = () =>(
    <div className="footer">
        <div className="footer-info">
            <span>Page created by: M.Kaliszewski</span>
                <span>Find me at:</span>
                <a href="https://github.com/mkaliszewski" alt="Github" target="_blank">Github</a>
                <a href="https://www.linkedin.com/in/mikołaj-kaliszewski-803040153" alt="Linkedin" target="_blank">LinkedIn</a>
        </div>
    </div>

)

export default Footer;