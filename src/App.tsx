import "./App.css";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <About />
      <Experience />
      <Projects/>
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
