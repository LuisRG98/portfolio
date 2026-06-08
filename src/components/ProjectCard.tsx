import { motion } from "framer-motion";

interface Props {
  title: string;
  image: string;
  link: string;
}

export default function ProjectCard({
  title,
  image,
  link,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -15,
        rotateX: 5,
      }}
      className="
      w-72
      rounded-2xl
      overflow-hidden
      bg-zinc-900/80
      backdrop-blur-md
      border
      border-blue-500/10
      cursor-pointer
      shadow-lg
      shadow-blue-900/20
      "
    >
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
          mt-4
          inline-flex
          items-center
          justify-center
          w-full
          py-3
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          text-white
          font-medium
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]
          "
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
}