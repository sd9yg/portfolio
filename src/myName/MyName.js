import React from "react";
import "../styles/myName.css";
import Typewriter from 'typewriter-effect';


const MyName = () => {
  return (
    <div id="myName">
      <h1>Sri Rupa Draksharam</h1>
      <div className="container">
      <Typewriter
        options={{
        strings: ['Software Engineer', 'Full-Stack developer'],
        autoStart: true,
        loop: true,
        }
      }/>
    </div>
  </div>
  );
};

export default MyName;
