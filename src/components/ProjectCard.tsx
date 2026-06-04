import { motion } from "framer-motion";

interface Props {
  title: string;
  image: string;
}

export default function ProjectCard({
  title,
  image,
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
      bg-zinc-900
      cursor-pointer
      "
    >
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h3>{title}</h3>
        </div>
    </motion.div>
  );
}