import { Link } from "react-router-dom";

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
    <section className="min-h-screen px-6 pb-16 pt-32">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <span className="section-label">How I Started Coding</span>
          <h2 className="text-5xl md:text-6xl tracking-tight gradient-text mt-3">
            My Story
          </h2>
        </div>

        <div className="glass-card p-7 md:p-8 mb-14">
          <p className="text-base text-center md:text-lg text-white/70 leading-relaxed">
            I'm <span className="gradient-text font-semibold">Anis Izri</span>,
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
        </div>

        <div className="flex flex-col gap-6">
          {timeline.map((item, i) => (
            <div key={item.year} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full gradient-bg shrink-0 mt-2 shadow-glow-accent" />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-white/10 my-1" />
                )}
              </div>

              <div className="glass-card flex-1 p-5 mb-1">
                <span className="badge">{item.year}</span>
                <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
                <p className="text-sm text-white/50 mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-7 mt-14 text-center">
          <span className="section-label">Turning Ideas Into Products</span>
          <p className="text-lg md:text-xl mt-3 font-medium leading-relaxed">
            My goal: become a developer who{" "}
            <span className="gradient-text">
              solves real problems for real people.
            </span>
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/project" className="btn-primary">
            View My Projects
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Story;
