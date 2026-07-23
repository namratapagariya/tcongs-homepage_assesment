import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Main Background */}

      <div className="absolute inset-0 bg-[#040814]" />

      {/* Cyan Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          -top-72
          left-1/2
          -translate-x-1/2
          w-[950px]
          h-[950px]
          rounded-full
          bg-cyan-500/15
          blur-[180px]
        "
      />

      {/* Blue Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[-250px]
          bottom-[-250px]
          w-[650px]
          h-[650px]
          rounded-full
          bg-blue-600/20
          blur-[180px]
        "
      />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Stars */}

      {Array.from({ length: 90 }).map((_, i) => (
        <motion.span
          key={i}
          animate={{
            opacity: [0.25, 1, 0.25],
          }}
          transition={{
            duration: 2 + (i % 5),
            repeat: Infinity,
          }}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#040814] to-transparent" />

    </div>
  );
}