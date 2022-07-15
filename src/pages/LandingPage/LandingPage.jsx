import "./LandingPage.css"
import React from "react";



export default function LandingPage() {

  return (
      <div className="App">
        <div className="homeDetails">
          <p className="subtitle">Welcome to my portfolio</p>
          <p className="description">{"I am a full stack developer based in Argentina " +
              "who has worked with languages ranging from JavaScript and Python, to Java and C."}</p>
          <p className="description">{" I have a background in software engineering and as an IT tech, so identifying " +
              "problems and finding solutions is what I do best. "}</p>
          <p className="description"> {"I am a native Spanish speaker and proficient in English"}</p>
        </div>

      </div>
  );
}
