import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import ContactPage from "./Pages/ContactPage";
import ExperienceSkillsPage from "./Pages/ExperienceSkillsPage";
import AboutPage from "./Pages/AboutPage";
import Homepage from "./Pages/Homepage";
import BlogsPage from "./Pages/BlogsPage";

function App() {
  return (
    <>
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/blogs" exact component={BlogsPage} />
            <Route path="/experience" exact component={ExperienceSkillsPage} />
            <Route path="/contact" exact component={ContactPage} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
