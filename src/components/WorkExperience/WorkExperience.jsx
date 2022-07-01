import React from "react"
import "./WorkExperience.scss"


export default function WorkExperience( {title, start, finish, image, where, description}){
  return(
      <div className="container">
        <p className="titleText">{title}</p>
        <p className="dateText">{start}-{finish}</p>
        <div className="whereContainer">
          <img className="whereImage" src={image}/>
          <p className="whereText">{where}</p>
        </div>
        <p className="descriptionText">{description}</p>
      </div>
  )
}