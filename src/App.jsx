import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Certification from "./components/Certificate/Certification";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certification />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
