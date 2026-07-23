import HeroBackground from "./HeroBackground";
import Globe from "./Globe";
import TechStack from "./TechStack";
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 md:pt-40">

      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-center px-6 md:px-10 lg:px-16 xl:px-20">

        <div className="grid w-full min-w-0 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="min-w-0"
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
              px-4
              py-2
              backdrop-blur-xl
              sm:px-5
              sm:py-2.5
              "
            >

              <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-xs font-medium text-cyan-300 sm:text-sm">

                Trusted by Businesses Worldwide

              </span>

            </div>

            {/* Heading */}

            <h1
              className="
              mt-8
              text-[38px]
              font-black
              leading-[1.05]
              tracking-[-1.5px]
              text-white
              sm:mt-10
              sm:text-[48px]
              md:text-[60px]
              md:tracking-[-3px]
              lg:text-[74px]
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

            <p
              className="
              mt-6
              max-w-[620px]
              text-base
              leading-8
              text-gray-400
              sm:mt-9
              sm:text-lg
              sm:leading-9
              "
            >

              We build enterprise software,
              AI-powered applications,
              cloud infrastructure,
              mobile platforms,
              automation solutions and digital experiences
              that help businesses scale globally.

            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-4 sm:mt-12 sm:gap-5">

              <button
                className="
                group
                flex
                items-center
                gap-3
                rounded-xl
                bg-cyan-500
                px-6
                py-3.5
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:bg-cyan-400
                hover:shadow-[0_18px_40px_rgba(34,211,238,.35)]
                sm:px-8
                sm:py-4
                sm:text-base
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
                px-6
                py-3.5
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:bg-white/10
                sm:px-8
                sm:py-4
                sm:text-base
                "
              >

                Explore Services

              </button>

            </div>

            {/* Tech */}

            <div className="mt-10 sm:mt-16">

              <p
                className="
                mb-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-gray-500
                sm:mb-6
                sm:tracking-[0.35em]
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
            className="relative mt-6 flex w-full justify-center lg:mt-0 lg:justify-end"
          >

            <Globe />

          </motion.div>

        </div>

      </div>

    </section>
  );
}