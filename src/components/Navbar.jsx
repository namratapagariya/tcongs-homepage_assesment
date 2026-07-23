import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineChevronDown,
  HiOutlineArrowRight,
  HiOutlineGlobeAlt,
  HiOutlineCodeBracket,
  HiOutlineShoppingCart,
  HiOutlineMegaphone,
  HiOutlinePaintBrush,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";
import {
  SiWordpress,
  SiShopify,
  SiLaravel,
  SiNodedotjs,
  SiReact,
  SiFlutter,
  SiAndroid,
  SiApple,
} from "react-icons/si";

const solutionGroups = [
  {
    title: "Web & App Development",
    icon: HiOutlineGlobeAlt,
    items: [
      { icon: SiWordpress, name: "WordPress Development", description: "Explore our comprehensive WordPress development solutions to elevate your brand." },
      { icon: SiShopify, name: "Shopify Development", description: "Explore our comprehensive Shopify development solutions to elevate your brand." },
      { icon: SiLaravel, name: "Laravel Development", description: "Explore our comprehensive Laravel development solutions to elevate your brand." },
      { icon: SiNodedotjs, name: "Node.js Development", description: "Explore our comprehensive Node.js development solutions to elevate your brand." },
      { icon: SiReact, name: "React.js Development", description: "Explore our comprehensive React.js development solutions to elevate your brand." },
      { icon: SiFlutter, name: "Flutter App Development", description: "Explore our comprehensive Flutter app development solutions to elevate your brand." },
      { icon: SiAndroid, name: "Android App Development", description: "Explore our comprehensive Android app development solutions to elevate your brand." },
      { icon: SiApple, name: "iOS App Development", description: "Explore our comprehensive iOS app development solutions to elevate your brand." },
    ],
  },
  {
    title: "Software Development",
    icon: HiOutlineCodeBracket,
    items: [
      { icon: HiOutlineCodeBracket, name: "Custom Software", description: "Tailored software built around your exact business workflow." },
      { icon: HiOutlineCodeBracket, name: "Enterprise Systems", description: "Scalable systems that grow with your organization." },
      { icon: HiOutlineCodeBracket, name: "SaaS Platforms", description: "Multi-tenant SaaS products built for real scale." },
      { icon: HiOutlineCodeBracket, name: "API Development", description: "Robust APIs that connect your entire ecosystem." },
    ],
  },
  {
    title: "E-commerce Solutions",
    icon: HiOutlineShoppingCart,
    items: [
      { icon: HiOutlineShoppingCart, name: "Online Storefronts", description: "Conversion-focused storefronts built to sell." },
      { icon: HiOutlineShoppingCart, name: "Payment Integration", description: "Secure, seamless checkout experiences." },
      { icon: HiOutlineShoppingCart, name: "Inventory Systems", description: "Real-time inventory across every channel." },
      { icon: HiOutlineShoppingCart, name: "Marketplace Apps", description: "Multi-vendor marketplace platforms." },
    ],
  },
  {
    title: "Digital Marketing",
    icon: HiOutlineMegaphone,
    items: [
      { icon: HiOutlineMegaphone, name: "SEO", description: "Rank higher and get found by the right audience." },
      { icon: HiOutlineMegaphone, name: "Performance Marketing", description: "Paid campaigns engineered for ROI." },
      { icon: HiOutlineMegaphone, name: "Content Marketing", description: "Content that builds trust and drives growth." },
      { icon: HiOutlineMegaphone, name: "Social Media", description: "Consistent, on-brand presence everywhere." },
    ],
  },
  {
    title: "Branding & UI/UX",
    icon: HiOutlinePaintBrush,
    items: [
      { icon: HiOutlinePaintBrush, name: "Brand Identity", description: "A visual identity that people remember." },
      { icon: HiOutlinePaintBrush, name: "UI Design", description: "Interfaces that feel effortless to use." },
      { icon: HiOutlinePaintBrush, name: "UX Research", description: "Design decisions backed by real user data." },
      { icon: HiOutlinePaintBrush, name: "Wireframing", description: "Clear blueprints before a line of code is written." },
    ],
  },
  {
    title: "Business Growth",
    icon: HiOutlineArrowTrendingUp,
    items: [
      { icon: HiOutlineArrowTrendingUp, name: "IT Consulting", description: "Strategic technology guidance for the long run." },
      { icon: HiOutlineArrowTrendingUp, name: "Digital Transformation", description: "Modernizing how your business operates." },
      { icon: HiOutlineArrowTrendingUp, name: "Analytics", description: "Turning your data into real decisions." },
      { icon: HiOutlineArrowTrendingUp, name: "Growth Strategy", description: "A clear roadmap to your next stage of scale." },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const activeGroup = solutionGroups[activeIndex];

  return (
    <motion.header
      animate={{ y: visible ? 0 : -120 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mt-5">
          <div
            className="
            flex
            h-[78px]
            items-center
            justify-between
            rounded-2xl
            border
            border-white/10
            bg-[#071320]/85
            px-8
            backdrop-blur-2xl
            shadow-[0_20px_60px_rgba(0,0,0,.35)]
            "
          >
            {/* LOGO */}
            <div className="flex items-center gap-4">
              <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-cyan-400
                via-cyan-500
                to-blue-600
                font-black
                text-xl
                "
              >
                T
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-wide">TCONGS</h2>
                <p className="mt-0.5 text-[11px] tracking-[0.42em] text-gray-400">
                  INFOTECH
                </p>
              </div>
            </div>

            {/* NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-12">
              <a
                href="#"
                className="text-[15px] font-medium text-gray-200 transition hover:text-cyan-400"
              >
                Home
              </a>

              <a
                href="#"
                className="text-[15px] font-medium text-gray-200 transition hover:text-cyan-400"
              >
                Company
              </a>

              <div
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <button
                  className="
                  flex
                  items-center
                  gap-2
                  text-[15px]
                  font-medium
                  text-gray-200
                  transition
                  hover:text-cyan-400
                  "
                >
                  Solutions
                  <HiOutlineChevronDown
                    className={`transition duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </button>

                {open && (
                  <>
                    <div
                      className="fixed inset-0 top-[98px] z-40 bg-black/60 backdrop-blur-sm"
                      onMouseEnter={() => setOpen(true)}
                      onMouseLeave={() => setOpen(false)}
                    />

                    <div
                      className="
                      absolute
                      left-1/2
                      top-14
                      -translate-x-1/2
                      flex
                      w-[980px]
                      overflow-hidden
                      rounded-[30px]
                      border
                      border-white/10
                      bg-[#071320]/95
                      backdrop-blur-3xl
                      shadow-[0_40px_100px_rgba(0,0,0,.45)]
                      z-50
                      "
                    >
                      {/* LEFT — category list */}
                      <div className="w-[300px] shrink-0 border-r border-white/10 p-4">
                        {solutionGroups.map((group, index) => {
                          const Icon = group.icon;
                          const isActive = index === activeIndex;

                          return (
                            <button
                              key={group.title}
                              onMouseEnter={() => setActiveIndex(index)}
                              className={`
                              flex
                              w-full
                              items-center
                              gap-3
                              rounded-2xl
                              px-5
                              py-4
                              text-left
                              transition-all
                              duration-200
                              ${
                                isActive
                                  ? "bg-cyan-500/10 text-cyan-300"
                                  : "text-gray-300 hover:bg-white/5 hover:text-white"
                              }
                              `}
                            >
                              <Icon className="text-xl shrink-0" />
                              <span className="text-[15px] font-semibold">
                                {group.title}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* RIGHT — live service grid for the active category */}
                      <div className="grid flex-1 grid-cols-2 gap-4 p-6">
                        {activeGroup.items.map((item) => {
                          const ItemIcon = item.icon;

                          return (
                            <a
                              key={item.name}
                              href="#"
                              className="
                              group
                              rounded-2xl
                              border
                              border-white/10
                              bg-white/[0.03]
                              p-5
                              transition-all
                              duration-300
                              hover:-translate-y-1
                              hover:border-cyan-400/30
                              hover:bg-cyan-500/[0.05]
                              "
                            >
                              <ItemIcon className="text-2xl text-cyan-400" />

                              <h4 className="mt-3 text-[15px] font-bold text-white">
                                {item.name}
                              </h4>

                              <p className="mt-2 text-sm leading-6 text-gray-400">
                                {item.description}
                              </p>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <a
                href="#"
                className="text-[15px] font-medium text-gray-200 transition hover:text-cyan-400"
              >
                Connect
              </a>
            </nav>

            {/* RIGHT BUTTONS */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-7
                py-3.5
                text-[15px]
                font-semibold
                transition-all
                duration-300
                hover:bg-white/10
                "
              >
                Let's Talk
              </button>

              <button
                className="
                group
                flex
                items-center
                gap-2
                rounded-xl
                bg-cyan-500
                px-8
                py-3.5
                text-[15px]
                font-semibold
                shadow-[0_15px_40px_rgba(34,211,238,.30)]
                transition-all
                duration-300
                hover:bg-cyan-400
                hover:shadow-[0_20px_50px_rgba(34,211,238,.45)]
                "
              >
                Schedule Meeting
                <HiOutlineArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
