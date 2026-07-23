import { motion } from "framer-motion";
import {
  HiOutlineGlobeAlt,
  HiOutlineCpuChip,
  HiOutlineCloud,
  HiOutlineDevicePhoneMobile,
  HiOutlinePaintBrush,
  HiOutlineChartBar,
  HiOutlineArrowRight,
} from "react-icons/hi2";

const services = [
  {
    icon: HiOutlineGlobeAlt,
    title: "Web Development",
    description:
      "Scalable, secure and high-performance web applications built with modern technologies.",
  },
  {
    icon: HiOutlineCpuChip,
    title: "AI Solutions",
    description:
      "Intelligent AI solutions and chatbots that automate processes and drive growth.",
  },
  {
    icon: HiOutlineCloud,
    title: "Cloud Services",
    description:
      "Reliable cloud infrastructure and DevOps solutions for seamless business operations.",
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences.",
  },
  {
    icon: HiOutlinePaintBrush,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive and user-centric designs that enhance engagement and usability.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies to increase visibility, generate leads and boost conversions.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-20 xl:px-24">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Our Services
          </p>

          <h2 className="mt-6 text-[36px] font-black leading-[1.2] tracking-[-1px] text-white lg:text-[46px]">
            Innovative Technology Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            For businesses that want to grow faster with digital tech.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-cyan-500/[0.05]
                "
              >
                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  "
                >
                  <Icon className="text-2xl text-cyan-400" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-gray-400">
                  {service.description}
                </p>

                <a
                  href="#"
                  className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-cyan-400
                  transition
                  group-hover:gap-3
                  "
                >
                  Learn More
                  <HiOutlineArrowRight className="text-base" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
