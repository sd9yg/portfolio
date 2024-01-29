import React from "react";
import "../styles/background.css";
import profilepic from "../assets/bg.png";

const Background = () => {
  return (
    <div >
      <img src={profilepic} alt="Your Photo" className="profilepic" />
    </div>
    
  );
};

export default Background;
