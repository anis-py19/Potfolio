import { ReactTyped } from "react-typed";
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router";

function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-16">
        <div className="max-w-6xl   mx-auto w-full">
          <div className="text-white flex flex-col gap-5 text-center">
            {/* Hi, I'm Anis */}
            <h3 className="text-2xl md:text-3xl font-medium text-slate-300">
              Hi, I'm <span className="gradient-text tracking-wider">Anis</span>
            </h3>

            {/* Typed Animation */}
            <div className="text-xl md:text-2xl lg:text-3xl font-medium">
              <span className="text-accent/70">{"<"}</span>
              <ReactTyped
                strings={["Front End Developer", "Content Creator"]}
                typeSpeed={80}
                backSpeed={80}
                loop
              />
              <span className="text-accent/70">{"/>"}</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              I Turn Ideas Into <br />{" "}
              <span className="gradient-text">Real Projects</span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-slate-400">
              I'm a business management student who fell for code. I'm early in
              the journey — but I show up every day, build things, and get a
              little better each time.
            </p>

            {/* Social Icons */}
            <div className="flex text-2xl gap-6 items-center justify-center mt-1 text-slate-400">
              <a
                href="#"
                className="hover:text-light transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="hover:text-highlight transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <FaTiktok />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-3">
              <button
                onClick={() => navigate("/contact")}
                className="btn-primary"
              >
                Get In Touch
              </button>
              <button
                onClick={() => navigate("/project")}
                className="btn-outline"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
