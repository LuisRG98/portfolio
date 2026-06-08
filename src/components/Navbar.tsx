export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        <div className="relative">
          <div
            className="
            absolute
            -inset-1
            rounded-full
            bg-gradient-to-r
            from-blue-400
            to-cyan-400
            blur-md
            opacity-70
            "
          />

          <div
            className="
            relative
            w-12
            h-12
            rounded-full
            flex
            items-center
            justify-center
            font-bold
            text-white

            bg-[#0b0d12]

            border-2
            border-white
            "
          >
            LR
          </div>
        </div>

        <div className="flex gap-8">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}