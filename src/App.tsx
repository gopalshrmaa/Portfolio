import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const skillList = ["React", "JavaScript", "TypeScript", "Java", "Python"];

function App() {
  return (
    <div className="min-h-screen bg-[#020314] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 space-y-16">

        {/* HERO */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.9 }}
          className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-center"
        >
          <h1 className="text-4xl font-bold">Gopal Sharma</h1>

          <p className="mt-3 text-violet-400">
            I build clean and interactive web applications 🚀
          </p>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-7">
            I am a Computer Science student specializing in AI/ML 🤖. 
            I enjoy solving problems, building real-world projects, and learning modern technologies like React and APIs.
          </p>
        </motion.header>
        
        {/* ABOUT */}
        <section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-400 leading-7">
              I'm focused on developing strong fundamentals in web development and problem-solving.
              Currently learning DSA and building projects to prepare for software development roles.
            </p>
          </div>
        </section>
        
        <center>
          <a
              href="/Gopal_Resume.pdf"
              download
              className="bg-green-600 px-4 py-2 rounded hover:bg-green-500 transition"
            >
              Download Resume
            </a>
        </center>
        {/* PROJECT */}
        <section>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="rounded-3xl bg-slate-900 p-8"
          >
            <h2 className="text-2xl font-semibold">Movie Search App 🎬</h2>

            <p className="text-gray-400 mt-3">
              Built using React, TypeScript, and Tailwind CSS. Features include movie search,
              API integration, responsive UI, and interactive modal for movie details.
            </p>

            {/* TECH TAGS */}
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-gray-700 px-2 py-1 text-sm rounded">React</span>
              <span className="bg-gray-700 px-2 py-1 text-sm rounded">TypeScript</span>
              <span className="bg-gray-700 px-2 py-1 text-sm rounded">Tailwind</span>
              <span className="bg-gray-700 px-2 py-1 text-sm rounded">API</span>
            </div>

            <div className="flex gap-4 mt-6 flex-wrap">
              <a
                href="https://movie-app-livid-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-violet-600 px-4 py-2 rounded hover:bg-violet-500 transition hover:scale-105"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/gopal-shrma/movie-app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition hover:scale-105"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-3xl mb-6 text-center">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {skillList.map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 p-4 rounded text-center hover:scale-105 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="text-center">
          <h2 className="text-3xl mb-6">Contact</h2>

          <div className="flex flex-wrap justify-center gap-6 items-center">

            <a
              href="mailto:mrgopal10101@gmail.com"
              className="hover:text-violet-400 transition"
            >
              Email
            </a>

            <a
              href="https://linkedin.com/in/gopal-sharma-42aba0256/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/gopal-shrma"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition"
            >
              GitHub
            </a>

            

          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 text-sm pt-6">
          © 2026 Gopal Sharma | Built with React ⚛️
        </footer>

      </div>
    </div>
  );
}

export default App;