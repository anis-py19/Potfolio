import { ReactTyped } from "react-typed";

function Services() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-16">
      <div className="max-w-2xl mx-auto w-full flex flex-col items-center text-center gap-6">
        {/* Status badge */}
        <span className="badge flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-accent animate-bounce" />
          Work in progress
          <ReactTyped strings={[".."]} loop typeSpeed={80} backSpeed={80} />
        </span>

        {/* Label */}
        <span className="section-label text-3xl">Services</span>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
          Coming{" "}
          <span className="gradient-text">
            <ReactTyped
              strings={["soon...", "very soon...", "real soon..."]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg max-w-xl text-slate-400 leading-relaxed">
          I'm putting together a focused set of services — frontend development,
          content creation, and clean UI design. Check back shortly.
        </p>
      </div>
    </section>
  );
}

export default Services;
