import { motion } from "framer-motion";

interface Props {
  year: string;
  title: string;
  description: string;
}

export default function TimelineItem({
  year,
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className="relative pl-12 pb-16"
    >
      {/* Línea */}
      <div className="absolute left-4 top-0 h-full w-[2px] bg-blue-500" />

      {/* Nodo */}
      <div
        className="
        absolute
        left-0
        top-0
        w-8
        h-8
        rounded-full
        bg-blue-500
        shadow-[0_0_20px_rgba(59,130,246,0.8)]
        "
      />

      <div
        className="
        bg-white/5
        backdrop-blur-md
        border
        border-blue-500/20
        rounded-2xl
        p-6
        "
      >
        <span className="text-blue-400 font-bold">
          {year}
        </span>

        <h3 className="text-xl font-bold mt-2">
          {title}
        </h3>

        <p className="text-zinc-400 mt-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}