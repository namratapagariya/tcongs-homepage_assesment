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
    icon: <FaReact size={26} />,
    name: "React",
  },
  {
    icon: <SiNextdotjs size={26} />,
    name: "Next.js",
  },
  {
    icon: <FaNodeJs size={26} />,
    name: "Node.js",
  },
  {
    icon: <SiMongodb size={26} />,
    name: "MongoDB",
  },
  {
    icon: <FaAws size={26} />,
    name: "AWS",
  },
  {
    icon: <FaFigma size={26} />,
    name: "Figma",
  },
];

export default function TechStack() {
  return (
    <div className="flex flex-wrap gap-4">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className="
            group
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            px-5
            py-3
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:bg-cyan-500/10
            hover:-translate-y-1
          "
        >
          <div className="text-cyan-400 group-hover:scale-110 transition-transform">
            {tech.icon}
          </div>

          <span className="text-sm font-medium text-gray-200">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}