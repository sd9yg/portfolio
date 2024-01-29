import React from "react";
import "../styles/footer.css"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

const Footer = () => {
  return (
    <div id="footer">  
    <div className="icons">
    <a href="https://github.com/sd9yg"><img src={github} alt="github logo"/></a>
    <a href="https://www.linkedin.com/in/srirupa-draksharam/"><img src={linkedin} alt="linkedin logo" /></a> 
      </div> 
      <p> &copy; SRI RUPA DRAKSHARAM</p>
    </div>
  );
};

export default Footer;
