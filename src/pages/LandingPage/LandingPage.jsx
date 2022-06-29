import "./LandingPage.css"
import React from "react";
import logo from "../../images/logo.svg"
import NavBar from "../../components/NavBar/NavBar";


export default function LandingPage() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Mateo Miniati: Fullstack Web Developer</h1>
        </header>
        <NavBar/>
        <div>
          <h3>About Me:</h3>
          <p>JavaScript Full-Stack Developer.With the capability of developping complete and scalable web applications.</p>
          <p>I am a very focused person. Relentlessly trying to find the solutions to any kind of problem that may be presented to me, and then, I can effectively pass that knowledge to others. I'm always wanting to learn more and teach what I learn to others</p>
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
