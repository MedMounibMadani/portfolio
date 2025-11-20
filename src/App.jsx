import './App.css';
import Navbar from './components/Nav';
import Home from "./components/Home";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Home />
      <Education />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

