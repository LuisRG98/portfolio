import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-8"
    >
      <h2 className="text-5xl font-bold mb-10">
        Contact
      </h2>

      <div className="space-y-4">

        <div className="flex items-center gap-3">
        <FaGithub size={24} />
        <span>https://github.com/LuisRG98/</span>
        </div>

        <div className="flex items-center gap-3">
        <FaLinkedin size={24} />
        <span>https://www.linkedin.com/in/luis-rivas-giwencer/</span>
        </div>

        <div className="flex items-center gap-3">
        <FaEnvelope size={24} />
        <span>luisricardorivasgiwencer@gmail.com</span>
        </div>

      </div>
    </section>
  );
}