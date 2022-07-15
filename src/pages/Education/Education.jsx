import React from "react";
import "./Education.scss"
import {Link} from "react-router-dom";


const itba = require("../../images/educationCertificates/ITBA.jpg")
const uba = require("../../images/educationCertificates/UBA.png")
const mh = require("../../images/educationCertificates/MichaelHam.png")
const soyHenry = require("../../images/educationCertificates/soyHenry.png")
const esfet = require("../../images/educationCertificates/esfet.png")
const igcse = require("../../images/educationCertificates/igcse.jfif")


export default function Education(){
  return(
      <div>
        <h3>
          Education
        </h3>
        <ul>
          <li className="listItem">
            <div className="imageContainer"><img src={mh} alt="MHMC" className="img"/></div>
            <p>Secondary Education: Michael Ham Memorial College</p>
          </li>
          <li className="listItem">
            <div className="imageContainer"><img src={itba} alt="ITBA" className="img"/></div>
            <p>Software Engineering: Instituto Tecnologico de Buenos Aires (2 years)</p>
          </li >
          <li className="listItem">
            <div className="imageContainer"><img src={uba} alt="UBA" className="img" /></div>
            <p>Software Engineering: Universidad de Buenos Aires (2 years)</p>
          </li>
          <li className="listItem">
            <Link to={{ pathname: "https://certificates.soyhenry.com/cert?id=6be14ffc-515b-4157-84cb-12cc7e2132ec"}} target="_blank" className="listItem">
              <div className="imageContainer"><img src={soyHenry} alt="Soy Henry" className="img"/></div>
              <p>Fullstack Developer Bootcamp: Soy Henry</p>
            </Link>
          </li>
        </ul>

        <h3> Certificates</h3>
        <ul>
          <li className="listItem">
              <Link to={{ pathname: "https://www.efset.org/cert/MhRk9N" }} target="_blank" className="listItem">
                <div className="imageContainer"><img src={esfet} alt="ESFET"  className="img"/></div>
                <p>EF Standard English Test: C2 Proficient (79/100)</p>
              </Link>
          </li>
          <li className="listItem">
            <div className="imageContainer"><img src={igcse} alt="IGCSE" className="img"/></div>
            <p>IGCSE: Pass with Merit certification</p>
          </li>
        </ul>
      </div>
  )
}