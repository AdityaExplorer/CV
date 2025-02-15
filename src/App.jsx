import "./App.css";
import AboutSection from "./component/AboutSection";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
