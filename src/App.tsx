import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Journey from "./sections/Journey";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <div className="wave-bg" />
      <div className="floating-lines" />

      <main className="text-white relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Journey />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
export default App;