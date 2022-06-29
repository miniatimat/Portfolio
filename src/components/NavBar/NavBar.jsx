import React from "react"
import {Link} from "react-router-dom";

export default function NavBar(){
  return(
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
  )
}