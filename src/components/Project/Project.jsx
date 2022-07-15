import React from "react";
import {Link} from "react-router-dom";
import "./Project.scss"

export default function Project({image, title, description, repoLink}){
  return(
      <div className="projectContainer">
        <Link to={{pathname:repoLink}} target="_blank">
          <div className="projectImageContainer">
            <img className="projectImage" src={image} alt="Couldn't load"/>
          </div>
          <div className="projectTextContainer">
            <p className="projectTitle">{title}</p>
            <p className="projectDescription">{description}</p>
          </div>
        </Link>
      </div>
  )
}