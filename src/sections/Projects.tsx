import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-8"
    >
      <h2 className="text-4xl font-bold mb-10">
        Recently Played
      </h2>

      <div className="flex gap-6 flex-wrap">

        <ProjectCard
          title="AI Meeting Assistant"
          image="/meeting.jpg"
        />

        <ProjectCard
          title="Restaurant ERP"
          image="/restaurant.jpg"
        />

        <ProjectCard
          title="AWS Platform"
          image="/aws.jpg"
        />

      </div>
    </section>
  );
}