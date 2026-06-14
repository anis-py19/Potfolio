import { ReactTyped } from "react-typed";
import { FiCode, FiTarget, FiBookOpen, FiBriefcase } from "react-icons/fi";

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

function Vision() {
  return (
    <section className="pt-32 pb-16 flex flex-col items-center justify-center px-6 min-h-screen">
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <h1 className="text-2xl md:text-3xl max-w-[600px] tracking-tight leading-snug text-center text-white/90">
          "Every website should solve a problem and create value. That belief is
          the reason I keep showing up."
        </h1>
        <span className="section-label flex items-center gap-1 mt-8">
          Where I'm Headed
          <ReactTyped strings={["?..."]} loop typeSpeed={80} backSpeed={80} />
        </span>
        <h2 className="text-3xl md:text-4xl flex items-center gap-2 font-extrabold mt-3">
          <span className="gradient-text">{"</"}</span>
          <ReactTyped
            loop
            backSpeed={80}
            typeSpeed={80}
            strings={[" My Vision"]}
          />
          <span className="gradient-text">{"/>"}</span>
        </h2>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-5">
        {visions.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="glass-card group flex flex-row items-start gap-4 p-6"
          >
            <div className="shrink-0 w-12 h-12 rounded-md flex items-center justify-center bg-accent/10 border border-accent/20 transition-colors duration-300 group-hover:bg-accent/20">
              <Icon className="text-xl text-accent transition-colors duration-300 group-hover:text-highlight" />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Vision;
