import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import TechSection from "./components/TechSection";
import CustomCursor from "./components/CustomCursor";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const skillList = ["React", "JavaScript", "TypeScript", "Java", "Python"];

function App() {
  return (
    <div className="min-h-screen bg-[#020314] text-white">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-12 sm:px-8">
        <CustomCursor />
        {/* HERO SECTION */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-slate-950/95 backdrop-blur-md p-12 sm:p-16 text-center shadow-2xl mb-20"
        >
          {/* Gradient Name */}
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Gopal Sharma
          </h1>

          <p className="mt-4 text-lg text-violet-300 font-medium">
            AI/ML Engineering Student
          </p>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-8 text-base sm:text-lg">
            I build clean, interactive web applications and solve real-world problems using React, TypeScript, and AI-powered workflows. Currently learning DSA and modern technologies to prepare for software development roles.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* Download Resume Button */}
            <a href="/GOPALResume.pdf" download="GOPALResume.pdf"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold rounded-2xl transition duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105 transform"
            >
              📄 Download Resume
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/gopalshrmaa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold rounded-2xl transition duration-300 hover:shadow-lg hover:scale-105 transform backdrop-blur-sm"
            >
              ⭐ GitHub
            </a>
          </div>
        </motion.header>

        <TechSection />

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>

            <motion.div
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 sm:p-10 hover:border-white/30 transition duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Movie Search App 🎬</h3>

              <p className="text-gray-300 mb-5 leading-7">
                A sleek, responsive movie discovery application built with React and TypeScript. Features fast filtering, clean card layouts, API integration, and an interactive modal for detailed movie information.
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "TypeScript", "Tailwind", "API"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm rounded-full hover:bg-violet-500/30 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://movie-app-livid-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold rounded-xl transition duration-300 hover:shadow-lg hover:scale-105 transform"
                >
                  🚀 Live Demo
                </a>

                <a
                  href="https://github.com/gopal-shrma/movie-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition duration-300 hover:scale-105 transform backdrop-blur-sm"
                >
                  💻 GitHub Repo
                </a>
              </div>
            </motion.div>

            {/* Blog Post Project */}
            <motion.div
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 sm:p-10 hover:border-white/30 transition duration-300 hover:shadow-2xl hover:shadow-violet-500/10 mt-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Blog Post Application 📝</h3>

              <p className="text-gray-300 mb-5 leading-7">
                A dynamic blog platform built with React and Node.js. Features include creating, reading, updating, and deleting blog posts, user authentication, responsive design, and a modern, intuitive interface for content management.
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Node.js", "MongoDB", "CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm rounded-full hover:bg-violet-500/30 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://blogpost-oq3p.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold rounded-xl transition duration-300 hover:shadow-lg hover:scale-105 transform"
                >
                  🚀 Live Demo
                </a>

                <a
                  href="https://github.com/gopal-shrma/BLOGPOST.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition duration-300 hover:scale-105 transform backdrop-blur-sm"
                >
                  💻 GitHub Repo
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-4xl font-bold mb-10 text-center">Core Technologies</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skillList.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 text-center hover:border-violet-400/50 transition duration-300 hover:shadow-lg hover:shadow-violet-500/10"
                >
                  <p className="font-semibold text-lg text-white">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-violet-950/30 via-white/5 to-purple-950/20 backdrop-blur-xl p-12 sm:p-16 text-center shadow-xl"
          >
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
              Feel free to reach out for collaboration, project ideas, or mentorship in AI/ML engineering.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap">
              {/* Email */}
              <a
                href="mailto:mrgopal10101@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold transition duration-300 hover:shadow-lg hover:scale-105 transform backdrop-blur-sm"
              >
                ✉️ Email
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/gopal-sharma-42aba0256/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400/60 text-blue-300 font-semibold transition duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transform backdrop-blur-sm"
              >
                💼 LinkedIn
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/gopalshrmaa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-gray-700/30 hover:bg-gray-700/50 border border-gray-600/30 hover:border-gray-500/60 text-gray-300 font-semibold transition duration-300 hover:shadow-lg hover:scale-105 transform backdrop-blur-sm"
              >
                🐙 GitHub
              </a>
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-400 text-sm py-8 border-t border-white/10">
          © 2026 Gopal Sharma | Built with React ⚛️ & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

export default App;