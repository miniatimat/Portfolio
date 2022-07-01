import {BrowserRouter, Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage";
import Projects from "./pages/Projects/Projects";
import SkillsXP from "./pages/SkillsXP/SkillsXP";
import NavBar from "./components/NavBar/NavBar";
import Education from "./pages/Education/Education";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
          <Route exact path="/">
            <LandingPage/>
          </Route>
        <Route exact path="/projects">
          <Projects/>
        </Route>
        <Route exact path="/education">
          <Education/>
        </Route>
        <Route exact path="/workExperience">
          <SkillsXP/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
