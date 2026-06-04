export default function Certifications() {
  return (
    <section
      className="py-24 px-8"
    >
      <h2 className="text-5xl font-bold mb-10">
        Certifications
      </h2>

      <div
        className="
        grid
        md:grid-cols-2
        gap-6
        "
      >
        <div className="bg-zinc-900 p-6 rounded-2xl">
          AWS Cloud Practitioner
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          AI Engineering
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          Python Advanced
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          MongoDB Associate
        </div>
      </div>
    </section>
  );
}