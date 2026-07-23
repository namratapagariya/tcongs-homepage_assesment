import HeroBackground from "./HeroBackground";
import Globe from "./Globe";
import TechStack from "./TechStack";
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-48">

      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-8 md:px-12 lg:px-20 xl:px-24">

        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            {/* Badge */}

            <div
              className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-5
              py-2.5
              backdrop-blur-xl
              "
            >

              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-sm font-medium text-cyan-300">

                Trusted by Businesses Worldwide

              </span>

            </div>

            {/* Heading */}

            <h1
              className="
              mt-12
              text-[60px]
              font-black
              leading-[1.15]
              tracking-[-2px]
              text-white
              lg:text-[76px]
              "
            >

              Smart Digital

              <span className="block text-cyan-400">

                Solutions

              </span>

              for Modern

              <span className="block">

                Businesses

              </span>

            </h1>

            {/* Description */}

            <p className="mt-10 max-w-[620px] text-lg leading-9 text-gray-400">
  We help brands grow with web, apps & marketing solutions across the globe.
</p>

            {/* Buttons */}

            <div className="mt-14 flex flex-wrap gap-5">

              <button
                className="
                group
                flex
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

                Schedule Meeting

                <HiArrowRight
                  className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  "
                />

              </button>

              <button
                className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-8
                py-4
                font-semibold
                transition-all
                duration-300
                hover:bg-white/10
                "
              >

                Explore Services

              </button>

            </div>

            {/* Tech */}

            <div className="mt-20">

              <p
                className="
                mb-6
                text-xs
                font-semibold
                uppercase
                tracking-[0.35em]
                text-gray-500
                "
              >

                Technologies We Use

              </p>

              <TechStack />

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-end"
          >

            <Globe />

          </motion.div>

        </div>

      </div>

    </section>
  );
}