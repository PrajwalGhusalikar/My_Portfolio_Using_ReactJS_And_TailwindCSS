import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./style.css";

function App() {
  return (
  <>
  <div className="w-screen">
  <Navbar/>
  <Home/>
  <Skills/>
  <Projects/>
  </div>

  </>
  )
}

export default App;
