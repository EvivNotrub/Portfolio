import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useRef } from "react";
import initFontAwesome from "./utils/fontAwesome/fontAwesomeLib.js";
import "./App.scss";
import Header from "./containers/header/header.jsx";
import Footer from "./containers/footer/footer.jsx";
import Loader from "./components/loader/loader.jsx";

initFontAwesome();
const Home = lazy(() => import("./pages/Home/home.jsx"));
const Error = lazy(() => import("./pages/Error/error.jsx"));
const ProjectPage = lazy(() => import("./pages/Project/projectPage.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio/portfolio.jsx"));
const Contact = lazy(() => import("./pages/Contact/contact.jsx"));
const Resume = lazy(() => import("./pages/Resume/resume.jsx"));
const VadorToggle = lazy(() =>
  import("./components/buttons/vadorToggle.jsx").then((module) => {
    return { default: module.VadorToggle };
  }),
);

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
      <Suspense fallback={<Loader />}>
        <Header
          // pPreviewRef={pPreviewRef}
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
        />
        <VadorToggle className={"App__vador"} />
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
      </Suspense>
      {/* </Router> */}
    </div>
  );
}

export default App;
