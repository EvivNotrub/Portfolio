import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import initFontAwesome from "./utils/fontAwesome/fontAwesomeLib.js";
import "./App.scss";
import Home from "./pages/Home/home.jsx";
import Error from "./pages/Error/error.jsx";
import Header from "./containers/header/header.jsx";
import Footer from "./containers/footer/footer.jsx";
import Portfolio from "./pages/Portfolio/portfolio.jsx";
import ProjectPage from "./pages/Project/projectPage.jsx";
import Resume from "./pages/Resume/resume.jsx";
import Contact from "./pages/Contact/contact.jsx";

initFontAwesome();

// TODO: manage Rooter properly
function App() {
  const homeRef = useRef(null);
  // const pPreviewRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <div className="App" data-testid="app-testid">
      {/* TODO_REMOVE: If Mentors confirm, remove and keep only the Router in main.jsx */}
      {/* <Router basename={import.meta.env.BASE_URL}> */}
      <Header
        // pPreviewRef={pPreviewRef}
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              // pPreviewRef={pPreviewRef}
              homeRef={homeRef}
              aboutRef={aboutRef}
              skillsRef={skillsRef}
            />
          }
        />
        {/* TODO: how do I render one of them already at the beginning ? */}
        <Route path="/contact" element={<Contact />} />
        {/*TODO: use Redirect to redirect to / ? OR/AND Route without path? */}
        {/* TODO: how to manage contact in other pages? arriving on home but doesn't scroll down?*/}
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/projects/:projectID" element={<ProjectPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
