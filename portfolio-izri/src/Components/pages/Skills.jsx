import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiSqlite,
  SiPython,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: SiHtml5, level: "Markup" },
    { name: "CSS", icon: SiCss, level: "Styling" },
    { name: "JavaScript", icon: SiJavascript, level: "Language" },
    { name: "Tailwind", icon: SiTailwindcss, level: "Framework" },
    { name: "React", icon: SiReact, level: "Library" },
    { name: "SQLite", icon: SiSqlite, level: "Database" },
    { name: "Python", icon: SiPython, level: "Language" },
  ];

  return (
    <section className="page-enter pt-32 pb-20 w-full px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex gap-3 items-center justify-center flex-col text-center mb-16">
          <span className="section-label">What I Work With</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight gradient-text">
            Skills
          </h2>
          <p className="font-medium max-w-[420px] text-center text-sm text-white/50 leading-relaxed mt-1">
            Passionate developer continuously learning and improving through
            every project.
          </p>
        </div>

        {/* Grid */}
        <div className="stagger-children  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {skills.map(({ name, icon: Icon, level }) => (
            <div
              key={name}
              className="glass-card  group p-7 flex flex-col items-center justify-center gap-4 text-center cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
            >
              <Icon className="text-5xl text-white/35 transition-all duration-300 group-hover:text-accent group-hover:scale-110" />

              <div className="flex flex-col items-center gap-1.5">
                <h3 className="text-base font-semibold tracking-wide">{name}</h3>
                <span className="text-[0.65rem] uppercase tracking-widest text-white/40 bg-white/5 px-2.5 py-0.5 rounded-full transition-colors duration-300 group-hover:text-highlight group-hover:bg-highlight/10">
                  {level}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;