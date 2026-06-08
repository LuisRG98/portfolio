export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        <h1 className="font-bold text-xl">
          LR
        </h1>

        <div className="flex gap-8">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
          <a href="#certifications">Certifications</a>
        </div>

      </div>
    </nav>
  );
}