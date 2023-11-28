import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import Error from "./pages/Error/error.jsx";
import Header from "./containers/header/header.jsx";
import Footer from "./containers/footer/footer.jsx";
import Portfolio from "./pages/Portfolio/portfolio.jsx";
import ProjectPage from "./pages/Project/projectPage.jsx";
import Resume from "./pages/Resume/resume.jsx";
import "./App.css";
// import Contact from "./containers/contact/contact.jsx";

// TODO: manage Rooter properly
function App() {
  console.log(
    "import.meta.env.DEV  :>> ",
    import.meta.env.DEV,
    "\nimport.meta.env.BASE_URL :>> ",
    import.meta.env.BASE_URL,
    "\nimport.meta.env.PROD :",
    import.meta.env.PROD,
    "\nimport.meta.env.MODE :>> ",
    import.meta.env.MODE,
    "\nimport.meta.env.SSR :>> ",
    import.meta.env.SSR,
  );

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="contact" element={<Contact />} /> */}
          </Route>
          {/*TODO: use Redirect to redirect to / ? OR/AND Route without path? */}
          {/* TODO: how to manage contact in other pages? arriving on home but doesn't scroll down?*/}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectID" element={<ProjectPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
