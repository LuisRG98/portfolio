import TrophyCard from "../components/TrophyCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-8"
    >
      <h2 className="text-5xl font-bold mb-10">
        Skills
      </h2>

      <div
        className="
        grid
        md:grid-cols-3
        gap-6
        "
      >
        <TrophyCard
          title="Programming Languages"
          description="Python, JavaScript, C#, Dart, PHP, HTML, CSS  "
        />

        <TrophyCard
          title="Frameworks & Technologies"
          description="FastAPI, Django, Flutter, Laravel"
        />

        <TrophyCard
          title="Backend & APIs"
          description="REST APIs, Firebase, Backend Integrations"
        />

        <TrophyCard
          title="Databases"
          description="SQL, MongoDB, NoSQL"
        />

        <TrophyCard
          title="Tools & Platforms"
          description="Git, GitHub, Bitbucket, Visual Studio Code, Android Studio, Xcode, Cloud / Infrastructure AWS, Kubernetes"
        />

        <TrophyCard
          title="Testing & Methodologies"
          description="Software Debugging, API Testing, Agile, Scrum, Kanban"
        />
      </div>
    </section>
  );
}