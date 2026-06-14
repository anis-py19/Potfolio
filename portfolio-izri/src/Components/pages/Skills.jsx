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
    <section className="pt-32 pb-16 w-full px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-4 items-center justify-center flex-col text-center mb-14">
          <span className="section-label">What I Work With</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight gradient-text">
            Skills
          </h2>
          <p className="font-medium max-w-[450px] text-center text-sm text-white/50 leading-relaxed">
            Passionate developer continuously learning and improving through
            every project.
          </p>
        </div>

        <div className="grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {skills.map(({ name, icon: Icon, level }) => (
            <div
              key={name}
              className="glass-card group p-6 flex flex-col items-center justify-center gap-3 text-center cursor-default"
            >
              <Icon className="text-4xl text-white/40 transition-colors duration-300 group-hover:text-accent" />
              <div className="flex flex-col gap-0.5">
                <h3 className="text-lg font-semibold">{name}</h3>
                <span className="text-[0.7rem] uppercase tracking-wider text-white/30 transition-colors duration-300 group-hover:text-highlight">
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
