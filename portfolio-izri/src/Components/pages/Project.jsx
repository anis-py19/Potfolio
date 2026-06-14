import { ReactTyped } from "react-typed";

const projects = [
  {
    name: "EduAnis",
    description:
      "A short, focused description of what this project does and the problem it solves.",
    stack: ["HTML", "CSS", "React", "Tailwind"],
    image: "/EduAnis.png",
    github: "https://github.com/anis-py19/EduAni-Platform",
    live: "https://edu-anis-platform.vercel.app/",
  },
  {
    name: "Sarah Store",
    description:
      "A short, focused description of what this project does and the problem it solves.",
    stack: ["HTML", "CSS", "JAVA SCRIPT"],
    image: "/Sarah Store.png",
    github: "https://github.com/anis-py19/Sarah-store",
    live: "https://sarah-storedz.netlify.app/",
  },
  {
    name: "Boxy Shop RIadh",
    description:
      "A short, focused description of what this project does and the problem it solves.",
    stack: ["HTML", "CSS"],
    image: "/Boxy Shop.png",
    github: "https://github.com/anis-py19/Boxy-Shop-Riadh",
    live: "https://boxyshopriad.netlify.app/",
  },
  {
    name: "Djazaier Hiking",
    description:
      "A short, focused description of what this project does and the problem it solves.",
    stack: ["HTML", "CSS"],
    image: "/Djazaier.png",
    github: "https://github.com/anis-py19/Djazaier-Hiking",
    live: "https://djazaier-hiking.netlify.app/",
  },
];

function Project() {
  return (
    <section className="page-enter pt-32 pb-16 px-6">
      <div className="cont w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex items-center flex-col text-center mb-14">
          <h2 className="text-3xl md:text-4xl flex items-center gap-2 font-extrabold">
            <span className="gradient-text">{"</"}</span>
            <ReactTyped
              loop
              backSpeed={80}
              typeSpeed={80}
              strings={["What ?"]}
            />
            <span className="gradient-text">{"/>"}</span>I Create
          </h2>
          <p className="font-medium text-sm text-white/50 max-w-[480px] text-center mt-4 leading-relaxed">
            These projects represent my journey as a developer. I'm still
            learning and growing, and every project helps me build stronger
            skills and gain real-world experience.
          </p>
        </div>

        <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map((project) => (
            <div
              key={project.name}
              className="glass-card group flex flex-col gap-4 p-5"
            >
              <div className="img relative w-full h-44 rounded-md bg-gradient-to-br from-primary/30 via-secondary/20 to-highlight/20 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-4xl font-black text-white/20 transition-colors duration-300 group-hover:text-white/40">
                    {project.name.charAt(0)}
                  </span>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="text flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="use mt-auto flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline flex-1 justify-center !px-4 text-sm"
                  >
                    GitHub
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary flex-1 justify-center !px-4 text-sm"
                    >
                      Live
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="btn-outline flex-1 justify-center !px-4 text-sm opacity-50 cursor-not-allowed"
                    >
                      Deploy Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
