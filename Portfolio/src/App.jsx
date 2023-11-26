import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error/Error.jsx";
import Header from "./containers/header/header.jsx";
import "./App.css";
import Footer from "./containers/footer/footer.jsx";

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
      <Router basename={import.meta.env.BASE_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<h1 className="Home">Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
          <Route path="/projects/:id" element={<h1>Project Details</h1>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
