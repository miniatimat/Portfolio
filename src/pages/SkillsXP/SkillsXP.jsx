import React from "react";
import WorkExperience from "../../components/WorkExperience/WorkExperience";

const consultar = require("../../images/workExperience/consultar.jfif")
const avh = require("../../images/workExperience/avh.jfif")

export default function skillsXP(){
  return(
      <div>
        <p> Skills:</p>
        <div>
          <p>Very good problem solving</p>
          <p>Able to communicate effectively and efficiently with teammates</p>
          <p>Organized</p>
          <div>
            <p>Able to work with various technologies: </p>
            < img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>
            <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
            <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
          </div>
        </div>

        <p>Previous work experience</p>
        <div>
            <WorkExperience
                title={"IT Service Technician"}
                start={"04/2019"}
                finish={"11/2019"}
                where={"Consultar H&S S.A."}
                image ={consultar}
                description={"In charge of mantaining all IT systems, diagnostics and repair of devices. Coming up with solutions to various technical problems"}
            />
            <WorkExperience
                title={"Computer Service Technician"}
                start={"03/2017"}
                finish={"06/2017"}
                where={"AVH San Luis S.A."}
                image={avh}
                description={"In charge of diagnostics and repair of electronic devices"}
            />
            <WorkExperience
                title={"Private Tutor"}
                start={"2016"}
                finish={"2018"}
                where={"Privately"}
                description={"Offer private tutoring of Maths, Physics and Chemistry to HighSchool level students"}
            />
        </div>

      </div>
  )
}