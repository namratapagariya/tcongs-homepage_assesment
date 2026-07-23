import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

const techs = [
  {
    icon: <FaReact size={22} />,
    name: "React",
  },
  {
    icon: <SiNextdotjs size={22} />,
    name: "Next.js",
  },
  {
    icon: <FaNodeJs size={22} />,
    name: "Node.js",
  },
  {
    icon: <SiMongodb size={22} />,
    name: "MongoDB",
  },
  {
    icon: <FaAws size={22} />,
    name: "AWS",
  },
  {
    icon: <FaFigma size={22} />,
    name: "Figma",
  },
];

export default function TechStack() {
  return (
    <div className="grid w-full min-w-0 grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:flex lg:flex-wrap">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className="
            group
            flex
            min-w-0
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            px-3
            py-2.5
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:bg-cyan-500/10
            hover:-translate-y-1
            sm:justify-start
            sm:gap-3
            sm:px-5
            sm:py-3
          "
        >
          <div className="flex-shrink-0 text-cyan-400 transition-transform group-hover:scale-110">
            {tech.icon}
          </div>

          <span className="whitespace-nowrap text-xs font-medium text-gray-200 sm:text-sm">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}