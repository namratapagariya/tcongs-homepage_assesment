import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-20 xl:px-24">
        <div
          className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-cyan-400/15
          bg-gradient-to-br
          from-[#071320]
          via-[#0a1a2b]
          to-[#040814]
          "
        >
          {/* Glow accents */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-blue-600/10 blur-[140px]" />

          <div className="relative grid grid-cols-1 items-center gap-12 p-10 lg:grid-cols-2 lg:p-20">
            {/* LEFT — slogan + quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
                Let's Work Together
              </p>

              <h2 className="mt-6 text-[40px] font-black leading-[1.15] tracking-[-1px] text-white lg:text-[52px]">
                Build. Scale. Grow
                <span className="block text-cyan-400">Your Digital Business.</span>
              </h2>

              <p className="mt-8 max-w-lg text-lg leading-8 text-gray-400">
                At Tcongs Infotech, we deliver powerful web, app, and marketing
                solutions designed to help your business grow faster, scale
                smarter, and succeed globally.
              </p>

              <button
                className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-cyan-500
                px-8
                py-4
                font-semibold
                transition-all
                duration-300
                hover:bg-cyan-400
                hover:shadow-[0_18px_40px_rgba(34,211,238,.35)]
                "
              >
                Start Your Project
                <HiOutlineArrowUpRight
                  className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </motion.div>

            {/* RIGHT — themed visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative h-[340px] w-full max-w-[420px]">
                {/* Orbit rings */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

                {/* Center quote card */}
                <div
                  className="
                  absolute
                  left-1/2
                  top-1/2
                  w-[260px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#071320]/90
                  p-7
                  text-center
                  backdrop-blur-xl
                  shadow-2xl
                  "
                >
                  <span className="text-4xl font-black text-cyan-400">"</span>
                  <p className="mt-1 text-[15px] italic leading-6 text-gray-300">
                    Build once. Scale forever.
                  </p>
                  <div className="mx-auto mt-4 h-px w-10 bg-cyan-400/40" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                    Tcongs Infotech
                  </p>
                </div>

                {/* Floating stat chips */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="
                  absolute
                  left-0
                  top-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#071320]/90
                  px-5
                  py-3
                  backdrop-blur-xl
                  shadow-xl
                  "
                >
                  <p className="text-xl font-black text-cyan-400">10+</p>
                  <p className="text-xs text-gray-400">Years Experience</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="
                  absolute
                  bottom-4
                  right-0
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#071320]/90
                  px-5
                  py-3
                  backdrop-blur-xl
                  shadow-xl
                  "
                >
                  <p className="text-xl font-black text-cyan-400">150+</p>
                  <p className="text-xs text-gray-400">Projects Delivered</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
