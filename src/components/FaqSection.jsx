import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePlus, HiOutlineArrowUpRight } from "react-icons/hi2";

const faqs = [
  {
    question: "What services does Tcongs Infotech offer?",
    answer:
      "We offer web development, mobile app development, custom software solutions, eCommerce management, and digital marketing services to help businesses grow online.",
  },
  {
    question: "How long does it take to build a website or app?",
    answer:
      "The timeline depends on project complexity. A basic website may take 7–15 days, while advanced platforms or mobile apps can take 3–8 weeks or more.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we work with clients from the USA, Canada, Dubai, and globally. We provide remote support and communication throughout the project.",
  },
  {
    question: "Can you help grow my business after development?",
    answer:
      "Yes, we offer SEO, digital marketing, and marketplace management services to help you generate leads, increase traffic, and boost sales.",
  },
  {
    question: "What makes Tcongs Infotech different?",
    answer:
      "We focus on complete business solutions — not just development. From idea to execution and marketing, we help you build, launch, and scale successfully.",
  },
  {
    question: "How can I get started?",
    answer:
      "Simply click on \"Book a Free Call\", share your requirements, and our team will guide you with the best solution for your business.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-20 xl:px-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT — heading + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              FAQs
            </p>

            <h2 className="mt-6 text-[36px] font-black leading-[1.2] tracking-[-1px] text-white lg:text-[46px]">
              Questions? We've Got Answers
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-gray-400">
              Tcongs Infotech helps businesses grow with web development,
              mobile apps, eCommerce solutions, and digital marketing. Here
              are answers to common questions from our clients.
            </p>

            <button
              className="
              group
              mt-10
              inline-flex
              items-center
              gap-3
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
              Book a Free Call
              <HiOutlineArrowUpRight
                className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </motion.div>

          {/* RIGHT — accordion */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`
                  rounded-3xl
                  border
                  bg-white/[0.03]
                  transition-all
                  duration-300
                  ${isOpen ? "border-cyan-400/30 bg-cyan-500/[0.05]" : "border-white/10"}
                  `}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left"
                  >
                    <span className="text-[17px] font-semibold text-white">
                      {faq.question}
                    </span>

                    <span
                      className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-cyan-400/20
                      bg-cyan-500/10
                      text-cyan-400
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-45" : ""}
                      `}
                    >
                      <HiOutlinePlus className="text-lg" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-8 pb-7 text-[15px] leading-7 text-gray-400">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
