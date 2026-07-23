import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    sub: "Business & Market Analysis",
    description:
      "We understand your business goals, target audience, and competitors. This helps us define the right strategy to build a strong digital foundation.",
  },
  {
    number: "02",
    title: "Planning",
    sub: "Strategy & Architecture",
    description:
      "We create detailed project plans, user flows, and system architecture to ensure smooth development and clear execution.",
  },
  {
    number: "03",
    title: "Design",
    sub: "UI/UX & Branding",
    description:
      "Our team designs modern, user-friendly interfaces that enhance user experience and reflect your brand identity.",
  },
  {
    number: "04",
    title: "Development",
    sub: "Web & App Development",
    description:
      "We build fast, scalable, and secure websites and applications using modern technologies tailored to your business needs.",
  },
  {
    number: "05",
    title: "Testing",
    sub: "Quality Assurance",
    description:
      "We test every feature to ensure performance, security, and usability across all devices before launch.",
  },
  {
    number: "06",
    title: "Launch & Growth",
    sub: "Deployment & Marketing",
    description:
      "After launch, we help you scale with SEO, digital marketing, and continuous optimization to grow your business online.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-20 xl:px-24">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Our Process
          </p>

          <h2 className="mt-6 text-[40px] font-black leading-[1.2] tracking-[-1px] text-white lg:text-[52px]">
            Our Simple, Effective Process
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            From idea to launch, we follow a proven process that ensures
            quality and success.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-24">
          {/* Connecting line — desktop only */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent lg:block lg:left-[38px]" />

          <div className="flex flex-col gap-16 lg:gap-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10 lg:pl-24"
              >
                {/* Number marker */}
                <div
                  className="
                  relative
                  z-10
                  flex
                  h-20
                  w-20
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-[#071320]
                  text-2xl
                  font-black
                  text-cyan-400
                  shadow-[0_20px_40px_rgba(0,0,0,.35)]
                  lg:absolute
                  lg:left-0
                  "
                >
                  {step.number}
                </div>

                {/* Content card */}
                <div
                  className="
                  flex-1
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:bg-cyan-500/[0.05]
                  lg:p-10
                  "
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                    <h3 className="text-2xl font-bold text-white lg:text-[28px]">
                      {step.title}
                    </h3>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      {step.sub}
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
