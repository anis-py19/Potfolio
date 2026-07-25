import { ReactTyped } from "react-typed";
import { FiCode, FiTarget, FiBookOpen, FiBriefcase } from "react-icons/fi";
import { motion } from "framer-motion";

const visions = [
  {
    icon: FiCode,
    title: "Master The Craft",
    desc: "Go deep on frontend engineering — performance, accessibility, and architecture that scales.",
  },
  {
    icon: FiTarget,
    title: "Solve Real Problems",
    desc: "Build products that make someone's day a little easier. Every website should create value.",
  },
  {
    icon: FiBookOpen,
    title: "Keep Learning Forever",
    desc: "Technology never stands still. Neither will I — curiosity is the whole point.",
  },
  {
    icon: FiBriefcase,
    title: "Enter Freelancing",
    desc: "Work with real clients, ship real work, and grow through honest feedback.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

function Vision() {
  return (
    <section className="relative pt-32 pb-16 flex flex-col items-center justify-center px-6 min-h-screen overflow-hidden">
      
      {/* Background Element */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 via-accent/5 to-transparent rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center text-center mb-16 relative z-10"
      >
        <h1 className="text-2xl md:text-3xl max-w-[600px] tracking-tight leading-snug text-center text-zinc-300 font-medium">
          "Every website should solve a problem and create value. That belief is
          the reason I keep showing up."
        </h1>
        <span className="section-label flex items-center gap-1 mt-10">
          Where I'm Headed
          <ReactTyped strings={["?..."]} loop typeSpeed={80} backSpeed={80} />
        </span>
        <h2 className="text-3xl md:text-5xl flex items-center gap-2 font-black mt-3 text-white tracking-tight">
          <span className="text-accent/50">{"</"}</span>
          <ReactTyped
            loop
            backSpeed={80}
            typeSpeed={80}
            strings={[" My Vision"]}
            className="gradient-text"
          />
          <span className="text-accent/50">{"/>"}</span>
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10"
      >
        {visions.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card group flex flex-col items-start gap-4 p-8 relative overflow-hidden border-white/5 bg-zinc-900/40 backdrop-blur-xl hover:bg-zinc-900/60 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 transition-colors duration-300 group-hover:bg-accent/10 group-hover:border-accent/20 relative z-10">
              <Icon className="text-2xl text-zinc-400 transition-colors duration-300 group-hover:text-highlight" />
            </div>
            
            <div className="flex flex-col gap-2 relative z-10">
              <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Vision;
