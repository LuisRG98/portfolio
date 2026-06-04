import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Journey from "./sections/Journey";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="bg-[#0b0d12] text-white">

      <Navbar />

      <Hero />

      <Projects />

      <Skills />

      <Journey />

      <Certifications />

      <Contact />

    </main>
  );
}

export default App;