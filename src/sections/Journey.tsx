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
          year="2020-Present"
          title="Code Road Service Support Engineer / Support Analyst"
          description="
          Developed and maintained internal business applications, resolved technical issues, implemented system enhancements, and collaborated with teams to improve performance, reliability, and operational efficiency."
        />

        <TimelineItem
          year="2024 – 2026"
          title="Jalasoft Software Developer"
          description="Developed and enhanced enterprise software solutions, implementing new features, troubleshooting production issues, and optimizing application performance. Partnered with cross-functional teams to deliver scalable, reliable, and maintainable solutions aligned with business and client needs."
        />

        <TimelineItem
          year="2020"
          title="Qualitas Test Team Junior QA Analyst"
          description="Assisted in software testing and quality assurance by executing test cases, tracking defects, validating functionality, and supporting release readiness to ensure reliable software delivery."
        />

        <TimelineItem
          year="2019"
          title="Freelance Backend Developer"
          description="Developed REST APIs using FastAPI, implementing backend logic, data handling, and scalable integrations to support application functionality and system interoperability."
        />

      </div>
    </section>
  );
}