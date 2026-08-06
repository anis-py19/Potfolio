import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiSqlite,
  SiPython,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "HTML", icon: SiHtml5, level: "Markup", color: "hover:text-[#E34F26]" },
    { name: "CSS", icon: SiCss, level: "Styling", color: "hover:text-[#1572B6]" },
    { name: "JavaScript", icon: SiJavascript, level: "Language", color: "hover:text-[#F7DF1E]" },
    { name: "Tailwind", icon: SiTailwindcss, level: "Framework", color: "hover:text-[#06B6D4]" },
    { name: "React", icon: SiReact, level: "Library", color: "hover:text-[#61DAFB]" },
    { name: "Express", icon: SiExpress, level: "Framework", color: "hover:text-[#ffffff]" },
    { name: "MongoDB", icon: SiMongodb, level: "Database", color: "hover:text-[#47A248]" },
    { name: "SQLite", icon: SiSqlite, level: "Database", color: "hover:text-[#003B57]" },
    { name: "Python", icon: SiPython, level: "Language", color: "hover:text-[#3776AB]" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section className="relative pt-32 pb-20 w-full px-6 min-h-screen overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-3 items-center justify-center flex-col text-center mb-16"
        >
          <span className="section-label">What I Work With</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight gradient-text">
            Skills
          </h2>
          <p className="font-medium max-w-[420px] text-center text-sm text-zinc-400 leading-relaxed mt-2">
            Passionate developer continuously learning and improving through
            every project.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {skills.map(({ name, icon: Icon, level, color }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card group p-7 flex flex-col items-center justify-center gap-5 text-center cursor-default transition-all duration-300 border-white/5 hover:bg-white/[0.03]"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon className={`relative z-10 text-5xl text-zinc-500 transition-all duration-300 ${color} group-hover:scale-110`} />
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <h3 className="text-base font-bold tracking-wide text-zinc-200 group-hover:text-white transition-colors">{name}</h3>
                <span className="text-[0.65rem] uppercase tracking-widest text-zinc-500 bg-white/5 px-2.5 py-0.5 rounded-full transition-colors duration-300 group-hover:text-highlight group-hover:bg-highlight/10 border border-white/5">
                  {level}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;