import { motion } from "framer-motion";

interface CertificationCardProps {
  title: string;
  issuer: string;
  badge: string;
  date: string;
  link: string;
}

export default function CertificationCard({
  title,
  issuer,
  badge,
  date,
  link,
}: CertificationCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateY: 6,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      bg-white/5
      backdrop-blur-xl
      border
      border-blue-500/20
      shadow-lg
      shadow-blue-900/20
      "
    >
      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-500
        bg-gradient-to-br
        from-blue-500/10
        via-cyan-500/10
        to-transparent
        "
      />

      <div className="relative z-10 p-6">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <img
            src={badge}
            alt={title}
            className="
            w-28
            h-28
            object-contain
            "
          />
        </div>

        {/* Title */}
        <h3
          className="
          text-xl
          font-bold
          text-center
          "
        >
          {title}
        </h3>

        {/* Issuer */}
        <p
          className="
          text-blue-400
          text-center
          mt-2
          "
        >
          {issuer}
        </p>

        {/* Date */}
        <p
          className="
          text-zinc-400
          text-sm
          text-center
          mt-1
          "
        >
          Issued {date}
        </p>

        {/* Verified */}
        <div className="flex justify-center mt-4">
          <span
            className="
            px-3
            py-1
            rounded-full
            bg-green-500/20
            text-green-400
            text-sm
            "
          >
            VERIFIED ✓
          </span>
        </div>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
          mt-6
          flex
          justify-center
          items-center
          rounded-xl
          py-3
          font-medium
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]
          transition-all
          "
        >
          View Credential
        </a>
      </div>
    </motion.div>
  );
}