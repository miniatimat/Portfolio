import React from "react"
import {Link, useRouteMatch} from "react-router-dom";
import logo from "../../images/Background.jpg";
import "./navbar.css"

export default function NavBar(){
  return(
      <div>
      <header className="App-header">
        <p className="title"> Mateo Miniati</p>
        <img src={logo} className="logo" alt="logo" />
      </header>
      <nav className="nav">
        <ul>
          <CustomLink to="/"> About Me:</CustomLink>
          <CustomLink to="/projects"> Projects</CustomLink>
          <CustomLink to="/workExperience" > Skills and Experience</CustomLink>
          <CustomLink to="/education" > Education and Certificates</CustomLink>
        </ul>
      </nav>
      </div>
  )
}

function handleClick(to){

}

function CustomLink({to, children, ...props}){
  const isActive = useRouteMatch({path: to, exact: true})
  return(
      <li className={isActive? "active":""} >
        <Link className={isActive?"activeLink":"link"} to={to} {...props}>
          {children}
        </Link>

      </li>
  )
}
