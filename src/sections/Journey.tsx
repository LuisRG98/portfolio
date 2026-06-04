import TimelineItem from "../components/TimelineItem";

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-24 px-8"
    >
      <h2 className="text-5xl font-bold mb-10">
        Career Journey
      </h2>

      <div className="space-y-8">

        <TimelineItem
          year="2021"
          title="Started Programming"
        />

        <TimelineItem
          year="2022"
          title="Backend Development"
        />

        <TimelineItem
          year="2024"
          title="Cloud Computing"
        />

        <TimelineItem
          year="2025"
          title="Artificial Intelligence"
        />

        <TimelineItem
          year="2026"
          title="Software Architecture"
        />

      </div>
    </section>
  );
}