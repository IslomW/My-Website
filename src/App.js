import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./App.css";
import Project from "./pages/project";
import Project2 from "./pages/project2";
import Project3 from "./pages/project3";
import Project4 from "./pages/project4";
import Project5 from "./pages/project5";

function App() {
  useEffect(() => {
    if (TRACKING_ID !== "") {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/article/:slug" element={<ReadArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/project1" element={<Project/>}/>
          <Route path="/project2" element={<Project2/>}/>
          <Route path="/project3" element={<Project3/>}/>
          <Route path="/project4" element={<Project4/>}/>
          <Route path="/project5" element={<Project5/>}/>
        </Routes>
      </div>
  );
}

export default App;
