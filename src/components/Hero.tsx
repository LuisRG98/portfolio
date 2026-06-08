import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      {/* Fondo principal */}
      <div className="hero-background" />

      {/* Olas decorativas */}
      <div className="wave-layer wave-1">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgba(0,90,255,0.12)"
            d="
            M0,224
            C180,160,360,160,540,224
            C720,288,900,288,1080,224
            C1260,160,1350,160,1440,224
            L1440,320
            L0,320
            Z
            "
          />
        </svg>
      </div>

      <div className="wave-layer wave-2">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgba(0,183,255,0.08)"
            d="
            M0,160
            C200,220,400,220,600,160
            C800,100,1000,100,1200,160
            C1320,190,1400,200,1440,180
            L1440,320
            L0,320
            Z
            "
          />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="
        relative
        z-20
        text-center
        backdrop-blur-xl
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-10
        "
      >
        <motion.img
          src={`${import.meta.env.BASE_URL}profile.png`}
          alt="Luis Rivas"
          className="
          w-44
          h-44
          rounded-full
          object-cover
          mx-auto
          border-4
          border-blue-500
          shadow-[0_0_50px_rgba(59,130,246,0.7)]
          "
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
        />

        <h1 className="mt-8 text-6xl font-bold">
          Luis Rivas
        </h1>

        <p className="text-blue-400 text-2xl mt-3">
          Software Engineer
        </p>

        <p className="text-zinc-400 mt-3">
          Lv. 28 Backend Developer
        </p>

        <div className="mt-8">
          <div className="w-full h-4 bg-zinc-800 rounded-full">
            <div
              className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-blue-400
              to-cyan-400
              "
              style={{ width: "85%" }}
            />
          </div>

          <p className="mt-2 text-zinc-400">
            Experience 85%
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="
            px-8
            py-4
            rounded-2xl

            bg-gradient-to-r
            from-blue-600
            to-cyan-500

            hover:scale-105
            hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]

            transition-all
            duration-300
            "
          >
            View Projects
          </a>

          <a
            href={`${import.meta.env.BASE_URL}Luis-Rivas-CV.pdf`}
            download
            className="
            px-8
            py-4
            rounded-2xl

            border
            border-white/20

            bg-white/5
            backdrop-blur-md

            hover:bg-white/10
            hover:scale-105

            transition-all
            duration-300
            "
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}