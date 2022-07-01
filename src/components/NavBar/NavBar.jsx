import React from "react"
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";

export default function NavBar(){
  return(
      <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Mateo Miniati: Fullstack Web Developer</h1>
      </header>
      <div className="navbar">
        <Link to="/">
          <button> About Me:</button>
        </Link>
        <Link to="/projects">
          <button> Projects</button>
        </Link>
        <Link to="/education">
          <button> Education and Certificates</button>
        </Link>
        <Link to="/workExperience">
          <button> Skills & Experience</button>
        </Link>
      </div>
      </div>
  )
}