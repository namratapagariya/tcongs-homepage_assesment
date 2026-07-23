import { FaLinkedinIn } from "react-icons/fa";

const companyLinks = ["Home", "Company", "Solution", "Connect"];

const servicesLinks = [
  "Web & App Development",
  "Software Development",
  "E-commerce Solutions",
  "Digital Marketing",
  "Branding & UI/UX",
  "Business Growth",
];

const growthLinks = [
  "Launch on Top Marketplaces",
  "Build High-Converting Stores",
  "Optimize Listings for Sales",
  "Run Profitable Ad Campaigns",
  "Grow Globally",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040814]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-10">
          {/* About / tagline */}
          <div className="col-span-2 md:col-span-1">
            <p className="max-w-[360px] text-[15px] leading-8 text-gray-400">
              Empowering global brands with 8+ years of expertise in custom
              web development, e-commerce marketplace optimization, and
              Generative Engine Optimization (GEO). We turn complex
              challenges into seamless digital growth.
            </p>

            <a
              href="https://in.linkedin.com/company/tcongs-infotech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[15px] text-gray-400 transition-colors duration-300 hover:text-cyan-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Services */}
          <div>
            <h4 className="mb-5 font-semibold text-white">
              Specialized Services
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[15px] text-gray-400 transition-colors duration-300 hover:text-cyan-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Scale Your Online Business */}
          <div>
            <h4 className="mb-5 font-semibold text-white">
              Scale Your Online Business
            </h4>
            <ul className="space-y-3">
              {growthLinks.map((link) => (
                <li key={link} className="text-[15px] text-gray-400">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            <span className="font-semibold text-gray-300">
              Mumbai Office:
            </span>{" "}
            Based in Mumbai, India. Serving clients worldwide.
          </p>
          <p>© 2026 Tcongs Infotech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
