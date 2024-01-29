import NMM from "../assets/NMM.png";
import portfolioImage from "../assets/portfolioImage.png"
import weatherApp from "../assets/weatherApp.png"

const projects = {
  1: {
    title: "Nine Men Morris Game",
    image: NMM,
    description: (
      <>
        <p>
        This is a Nine Men's Morris game that offers the versatility of human-to-human gameplay and the option to play against a machine opponent for solo entertainment.
        </p>
      </>
    ),
    github: "https://github.com/sd9yg/nmm"
   
  },
  2: {
    title: "My Portfolio",
    image: portfolioImage,
    description: (
      <>
        <p>
        This is my professional portfolio, meticulously presenting my skills, career trajectory, educational background, and a diverse array of projects. For inquiries or connections, one can utilize the provided contact option.  </p>
      </>
    ),
    github: "https://github.com/sd9yg/portfolio"
    
  },
  3: {
    title: "Weather App",
    image: weatherApp,
    description: (
      <>
        <p>
          Developed a dynamic weather application utilizing Angular, fetching real-time weather data from OpenWeatherMap API, providing users with accurate and visually appealing weather information for any city. </p> 
      </>
    ),
    github: "https://github.com/sd9yg/WeatherApp"
    
  },
};

export default projects;
