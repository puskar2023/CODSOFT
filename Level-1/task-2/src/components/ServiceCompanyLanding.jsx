import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Briefcase,
  Phone,
  Sun,
  Moon,
  Star,
  Quote,
  Globe,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceCompanyLanding() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-gradient-to-br from-white via-zinc-100 to-white dark:from-black dark:via-zinc-900 dark:to-black text-zinc-900 dark:text-white transition-colors duration-300">
        {/* NAVBAR */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-black/40 border-b border-black/10 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#9B5DE0] to-[#FA891A] bg-clip-text text-transparent">
              PrimeTech Solutions
            </h1>

            <div className="flex items-center gap-6 text-sm">
              <div className="hidden md:flex gap-6 text-zinc-600 dark:text-zinc-300">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#process">Process</a>
                <a href="#team">Team</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#testimonials">Clients</a>
                <a href="#contact">Contact</a>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-xl border border-black/20 dark:border-white/20"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-xl border border-black/10 dark:border-white/10"
              ></button>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="min-h-screen flex items-center px-8 pt-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Digital Solutions for
                <span className="text-indigo-500"> Modern Businesses</span>
              </h2>

              <p className="mt-6 text-zinc-600 dark:text-zinc-400 max-w-xl">
                PrimeTech Solutions is a professional technology services
                company delivering scalable web, mobile, and cloud solutions
                worldwide.
              </p>

              <div className="mt-8 flex gap-4">
                <button className="bg-indigo-500 text-white px-6 py-3 rounded-2xl hover:bg-indigo-400 transition">
                  Get Consultation{" "}
                  <ArrowRight className="inline ml-2" size={16} />
                </button>
                <button className="border border-black/20 dark:border-white/20 px-6 py-3 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 transition">
                  View Services
                </button>
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Team working"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-32 px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Office"
              className="rounded-3xl"
            />
            <div>
              <h3 className="text-4xl font-bold">About Our Company</h3>
              <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                Founded with a vision to empower businesses through technology,
                PrimeTech Solutions partners with startups and enterprises to
                deliver secure, scalable, and impactful digital products.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="py-32 px-8 bg-black/5 dark:bg-white/5"
        >
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center">
              Our Services
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {["Web Development", "Mobile Applications", "Cloud & DevOps"].map(
                (service) => (
                  <motion.div
                    whileHover={{ y: -10 }}
                    key={service}
                    className="rounded-3xl bg-white dark:bg-black/40 p-8 border border-black/10 dark:border-white/10"
                  >
                    <Briefcase className="text-indigo-500 mb-4" />
                    <h4 className="text-xl font-semibold">{service}</h4>
                    <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                      Professional {service.toLowerCase()} services tailored to
                      your business needs.
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center">
              Recent Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((p) => (
                <motion.img
                  key={p}
                  whileHover={{ scale: 1.05 }}
                  src={`https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/`}
                  alt="Project"
                  className="rounded-3xl shadow-lg"
                />
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center">
              Our Process
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {["Discovery", "Design", "Development", "Delivery"].map(
                (step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.4 }}
                    className="rounded-3xl bg-black/5 dark:bg-white/5 p-8"
                  >
                    <CheckCircle className="text-indigo-500 mb-4" />
                    <h4 className="text-xl font-semibold">{step}</h4>
                    <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                      Clear and structured approach ensuring consistent quality.
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="py-32 px-8 bg-black/5 dark:bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center">Our Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {["Engineering", "Design", "Strategy"].map((team, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.4 }}
                  className="rounded-3xl bg-black/5 dark:bg-white/5 p-8"
                  key={team}
                  // className="rounded-3xl bg-white dark:bg-black/40 p-8 text-center"
                >
                  <Users className="text-indigo-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold">{team}</h4>
                  <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                    Highly skilled professionals with industry experience.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          id="testimonials"
          className="py-32 px-8 bg-black/5 dark:bg-white/5"
        >
          <div className="max-w-5xl mx-auto text-center">
            <Quote className="mx-auto text-indigo-500 mb-4" size={40} />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-xl text-zinc-600 dark:text-zinc-400"
            >
              “PrimeTech transformed our digital infrastructure and accelerated
              our growth beyond expectations.”
            </motion.p>
            <p className="mt-6 font-semibold">— Enterprise Client</p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Phone className="mx-auto text-indigo-500 mb-4" size={40} />
            <h3 className="text-4xl font-bold">Let’s Build Together</h3>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Contact us to discuss your next digital project.
            </p>
            <button className="mt-8 bg-indigo-500 text-white px-8 py-4 rounded-2xl hover:bg-indigo-400 transition">
              Contact Us
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 text-center text-zinc-500 border-t border-black/10 dark:border-white/10">
          © 2026 PrimeTech Solutions. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
