import "./LandingPage.css"
import React from "react";
import logo from "../../images/logo.svg"
import NavBar from "../../components/NavBar/NavBar";


export default function LandingPage() {

  const currentDate = Date.now()
  const born= Date.UTC(1998, 9, 9, 0,0,0,0)
  const dt1 = new Date(born);
  const dt2 = new Date(currentDate);
  const date = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24*365));



  return (
      <div className="App">
        <div>
          <h3>About Me:</h3>
          <p>JavaScript Full-Stack Developer.With the capability of developping complete and scalable web applications.</p>
          <p> I am a graduate from the Soy Henry Fullstack developer course, looking to get into the world of IT</p>
          <p> I am a {date} year-old with a huge drive to learn, improve and leave my mark on the world</p>
          <>
            <h3 align="left">Languages:</h3>
            <a target="_blank" rel="noreferrer"> < img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a>
            <a target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/></a>
            <a target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/></a>
            <a target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/></a>
          </></div>

      </div>
  );
}
