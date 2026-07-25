import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const projects = [
  {
    name: "EduAnis",
    description:
      "A platform focused on delivering educational content with a clean and interactive interface.",
    stack: ["React", "Tailwind", "CSS"],
    image: "/EduAnis.png",
    github: "https://github.com/anis-py19/EduAni-Platform",
    live: "https://edu-anis-platform.vercel.app/",
  },
  {
    name: "Sarah Store",
    description:
      "An e-commerce landing page featuring product showcases and a smooth user experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/Sarah Store.png",
    github: "https://github.com/anis-py19/Sarah-store",
    live: "https://sarah-storedz.netlify.app/",
  },
  {
    name: "Boxy Shop Riadh",
    description:
      "A modern UI design for a clothing store, prioritizing visuals and grid layouts.",
    stack: ["HTML", "CSS"],
    image: "/Boxy Shop.png",
    github: "https://github.com/anis-py19/Boxy-Shop-Riadh",
    live: "https://boxyshopriad.netlify.app/",
  },
  {
    name: "Djazaier Hiking",
    description:
      "A beautifully crafted landing page for a hiking and outdoor adventure agency.",
    stack: ["HTML", "CSS"],
    image: "/Djazaier.png",
    github: "https://github.com/anis-py19/Djazaier-Hiking",
    live: "https://djazaier-hiking.netlify.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

function Project() {
  return (
    <section className="relative pt-32 pb-16 px-6 min-h-screen overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center flex-col text-center mb-16"
        >
          <span className="section-label mb-2">My Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl flex items-center gap-2 font-black tracking-tight">
            <span className="text-accent/50">{"</"}</span>
            <ReactTyped
              loop
              backSpeed={80}
              typeSpeed={80}
              strings={["Projects"]}
              className="text-white"
            />
            <span className="text-accent/50">{">"}</span>
          </h2>
          <p className="font-medium text-base text-zinc-400 max-w-[500px] text-center mt-4 leading-relaxed">
            These projects represent my journey as a developer. I'm still
            learning and growing, and every project helps me build stronger
            skills and gain real-world experience.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              className="glass-card group flex flex-col p-2 sm:p-3 relative overflow-hidden h-full"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 sm:h-64 rounded-xl bg-zinc-900 overflow-hidden isolate">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-5xl font-black text-white/10 transition-colors duration-300 group-hover:text-white/20">
                    {project.name.charAt(0)}
                  </span>
                )}
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                
                {/* Content over image */}
                <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-2 transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-white shadow-sm">{project.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-xs font-semibold px-2 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-white/90">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description and Links below */}
              <div className="flex flex-col flex-1 p-4 sm:p-5 gap-6 justify-between bg-zinc-900/50 rounded-b-xl mt-1">
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline flex-1 justify-center !py-2.5 !px-4 text-sm"
                  >
                    GitHub
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary flex-1 justify-center !py-2.5 !px-4 text-sm"
                    >
                      Live View
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="btn-outline flex-1 justify-center !py-2.5 !px-4 text-sm opacity-50 cursor-not-allowed"
                    >
                      Deploy Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
