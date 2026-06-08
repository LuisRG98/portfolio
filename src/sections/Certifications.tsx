import CertificationCard from "../components/CertificationCard";

export default function Certifications() {
  const certifications = [
    {
      title: "SQL",
      issuer: "IBM",
      date: "2026",
      badge: `${import.meta.env.BASE_URL}sql.jpeg`,
      link: "https://coursera.org/share/f71965e7aa7041678a072f20c70edc88",
    },
    {
      title: "EFSET English Certificate",
      issuer: "EFSET",
      date: "2024",
      badge: `${import.meta.env.BASE_URL}english.png`,
      link: "https://cert.efset.org/ouhpdd",
    },
    {
      title: "Problem Solving",
      issuer: "HackerRank ",
      date: "2023",
      badge: `${import.meta.env.BASE_URL}problem.png`,
      link: "https://www.hackerrank.com/certificates/732d03ff8a50",
    },
    
  ];

  return (
    <section
      id="certifications"
      className="
      py-32
      px-6
      "
    >
      <h2
        className="
        text-5xl
        font-bold
        text-center
        mb-4
        "
      >
        Certification Gallery
      </h2>

      <p
        className="
        text-center
        text-zinc-400
        mb-16
        "
      >
        Verified certifications and professional achievements.
      </p>

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        "
      >
        {certifications.map((cert) => (
          <CertificationCard
            key={cert.title}
            {...cert}
          />
        ))}
      </div>
    </section>
  );
}