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
      {/* Fondo Hero */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-blue-950
        via-[#050816]
        to-black
        "
      />

      {/* Glow adicional */}
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]
        "
      />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="
        relative
        z-10
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

        <button
          className="
          mt-8
          px-8
          py-3
          rounded-xl
          bg-blue-600
          hover:bg-blue-500
          transition
          "
        >
          Start Journey
        </button>
      </motion.div>

      {/* OLA DE TRANSICIÓN */}
      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-[180px]
        z-10
        "
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            fill="rgba(0,90,255,0.18)"
            d="
            M0,224
            C180,160,
            360,160,
            540,224

            C720,288,
            900,288,
            1080,224

            C1260,160,
            1350,160,
            1440,224

            L1440,320
            L0,320
            Z
            "
          />
        </svg>
      </div>
    </section>
  );
}