import TrophyCard from "../components/TrophyCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-8"
    >
      <h2 className="text-5xl font-bold mb-10">
        Trophies
      </h2>

      <div
        className="
        grid
        md:grid-cols-3
        gap-6
        "
      >
        <TrophyCard
          title="Python Expert"
          description="FastAPI, Django, AI"
        />

        <TrophyCard
          title="Cloud Explorer"
          description="AWS Services"
        />

        <TrophyCard
          title="Backend Master"
          description="NestJS & APIs"
        />

        <TrophyCard
          title="MongoDB Specialist"
          description="NoSQL Databases"
        />

        <TrophyCard
          title="AI Builder"
          description="Gemini & LLMs"
        />

        <TrophyCard
          title="Full Stack"
          description="React & Next.js"
        />
      </div>
    </section>
  );
}