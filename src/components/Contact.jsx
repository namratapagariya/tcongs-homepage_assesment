import { useState, useMemo } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    sum: "",
  });
  const [status, setStatus] = useState("idle"); // idle | error | sent

  // simple human-verification challenge
  const challenge = useMemo(() => {
    const a = Math.floor(Math.random() * 8) + 1;
    const b = Math.floor(Math.random() * 8) + 1;
    return { a, b, answer: a + b };
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    if (Number(form.sum) !== challenge.answer) {
      setStatus("error");
      return;
    }
    // TODO: wire this up to your actual submit endpoint / email service
    setStatus("sent");
  }

  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-10 lg:px-16 xl:px-20">
      {/* ambient glow, consistent with hero */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-20 lg:grid-cols-[0.85fr_1.15fr]">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact Us
          </p>

          <h2 className="text-[38px] font-black leading-[1.08] tracking-[-1.5px] text-white lg:text-[46px]">
            Let&rsquo;s Build Something
            <span className="block">You&rsquo;ll Be Proud Of</span>
          </h2>

          <p className="mt-8 max-w-[480px] text-lg leading-8 text-gray-400">
            Have a project in mind? Whether you need a website, mobile app, or
            digital solution, our team is ready to turn your ideas into
            reality.
          </p>

          <ul className="mt-12 space-y-6">
            {[
              "You'll hear from us within one business day.",
              "We'll understand your goals and requirements.",
              "You'll receive a clear proposal with pricing & timeline.",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                <span className="leading-7">{line}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12"
        >
          <div className="space-y-7">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-500 outline-none transition-colors duration-300 focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-500 outline-none transition-colors duration-300 focus:border-cyan-400"
            />

            <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 focus-within:border-cyan-400">
              <span className="flex items-center gap-2 border-r border-white/10 px-4 text-gray-400">
                🇮🇳 <span className="text-xs">▾</span>
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-transparent px-5 py-4 text-white placeholder-gray-500 outline-none"
              />
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your project*"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-500 outline-none transition-colors duration-300 focus:border-cyan-400"
            />

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Human Verification: {challenge.a} + {challenge.b} =
              </label>
              <input
                type="text"
                name="sum"
                placeholder="Enter Sum*"
                value={form.sum}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-500 outline-none transition-colors duration-300 focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-cyan-500 py-4 font-semibold text-[#040814] transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_18px_40px_rgba(34,211,238,.35)]"
            >
              {status === "sent" ? "Sent ✓" : "Submit Inquiry"}
            </button>

            {status === "error" && (
              <p className="text-sm text-red-400">
                Please fill all required fields and verify the sum correctly.
              </p>
            )}

            <p className="text-center text-sm text-gray-500">
              Prefer email instead? Feel free to contact us directly.
              <br />
              <a
                href="mailto:info@tcongsinfotech.com"
                className="text-cyan-400 hover:text-cyan-300"
              >
                info@tcongsinfotech.com
              </a>
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
