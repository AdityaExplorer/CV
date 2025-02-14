import "./App.css";
import AboutSection from "./component/AboutSection";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Projects/>
    </>
  );
}

export default App;
