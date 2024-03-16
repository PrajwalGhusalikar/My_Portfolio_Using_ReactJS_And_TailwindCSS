import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./style.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Experiance from "./components/Experiance";

function App() {
  return (
    <>
      <div className="w-screen">
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Experiance/>
        <Contact />
        <About />
        <Footer/>
      </div>
    </>
  );
}

export default App;
