import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-8"
    >
      <h2 className="text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="flex gap-6 flex-wrap">

        <ProjectCard
          title="CodeSync — Intelligent Meeting Assistant"
          image={`${import.meta.env.BASE_URL}meeting.png`}
          link="https://github.com/LuisRG98/aiagent"
        />

        <ProjectCard
          title="Finance chatbot"
          image={`${import.meta.env.BASE_URL}finance.png`}
          link="https://github.com/LuisRG98/finchat"
        />

        <ProjectCard
          title="AWS Platform"
          image={`${import.meta.env.BASE_URL}meeting.png`}
          link=""
        />

      </div>
    </section>
  );
}