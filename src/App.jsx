import "./App.css";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contactsfinal from "./sections/Contact/Contacts";
import Footer from "./sections/Footer/Footer";
import NavBar from "./sections/NavBar/NavBar";
import Personal from "./sections/Personal/Personal";

function App() {
  console.log("test");
  return (
    <>
      <NavBar/>
      <Hero />
      {/* add typing effect/ banner/ elemtns */}
      <Projects />
      {/* add images actual projects / add hover effect image stuff*/}
      <Skills />
      {/* add actual images */}
      <Contactsfinal />
      {/* properly link */}
      <Personal/>

      <Footer />
    </>
  );
}

export default App;
