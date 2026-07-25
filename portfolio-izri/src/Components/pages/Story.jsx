import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Baccalauréat",
    desc: "Finished high school and earned my Bac — the door to what comes next.",
  },
  {
    year: "2025",
    title: "Discovering Programming",
    desc: "Took my first steps into code, starting with Python and learning the fundamentals.",
  },
  {
    year: "Mar 21, 2026",
    title: "My First Line of Web",
    desc: "Wrote my very first line of web development — the moment everything clicked.",
  },
  {
    year: "Apr 2026",
    title: "Full Focus on Web",
    desc: "Stepped away from Python to fully commit to front-end development.",
  },
  {
    year: "Now",
    title: "Building & Preparing",
    desc: "Shipping personal projects and getting ready to step into freelance work.",
  },
];

function Story() {
  return (
    <section className="relative min-h-screen px-6 pb-16 pt-32 overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center mb-12"
        >
          <span className="section-label">How I Started Coding</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight gradient-text mt-3">
            My Story
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-7 md:p-8 mb-16 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
          <p className="text-base text-center md:text-lg text-zinc-300 leading-relaxed relative z-10">
            I'm <span className="text-white font-bold tracking-wide">Anis Izri</span>,
            a Front-End Developer in progress, passionate about building modern
            and clean web interfaces. I'm also a content creator and podcast
            host, where I share ideas about business, mindset, and personal
            growth. My goal is to combine technology and creativity to build
            impactful digital experiences and grow as a professional developer.
          </p>

          <div className="flex justify-center mt-6">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-300 hover:text-highlight"
            >
              Let's work together
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>

        <div className="flex flex-col gap-0 relative">
          {timeline.map((item, i) => (
            <motion.div 
              key={item.year} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-primary to-highlight shrink-0 mt-2 shadow-glow-accent ring-4 ring-black" />
                {i < timeline.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/50 to-transparent my-1 rounded-full" />
                )}
              </div>

              <div className="glass-card flex-1 p-6 mb-8 hover:-translate-y-1 transition-transform duration-300">
                <span className="badge !bg-white/5 !border-white/10 !text-zinc-300">{item.year}</span>
                <h3 className="text-xl font-bold mt-4 text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 mt-14 text-center border-accent/20 bg-accent/5"
        >
          <span className="section-label !text-accent">Turning Ideas Into Products</span>
          <p className="text-xl md:text-2xl mt-4 font-bold leading-relaxed text-white">
            My goal: become a developer who{" "}
            <span className="gradient-text">
              solves real problems for real people.
            </span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <Link to="/project" className="btn-primary">
            View My Projects
            <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Story;
