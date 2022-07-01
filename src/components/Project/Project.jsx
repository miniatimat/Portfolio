import React from "react";
import {Link} from "react-router-dom";

export default function Project({image, description, repoLink}){
  return(
      <>
        <Link to={repoLink}>
          <img src={image} alt="Couldn't load"/>
          <p>{description}</p>
        </Link>
      </>
  )
}