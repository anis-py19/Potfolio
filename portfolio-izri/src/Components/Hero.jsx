import { ReactTyped } from "react-typed";
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-16 overflow-hidden">
      {/* Background Animated Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-highlight/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col gap-6 text-center items-center">
         

          {/* Hi, I'm Anis */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-medium text-zinc-300"
          >
            Hi, I'm <span className="gradient-text tracking-wider font-bold">Anis Izri</span>
          </motion.h3>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight"
          >
            I Turn Ideas Into <br />
            <span className="bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text text-transparent pb-2">
              Real Projects
            </span>
          </motion.h1>

          {/* Typed Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium mt-2"
          >
            <span className="text-accent/70 mr-2">{"<"}</span>
            <ReactTyped
              strings={["Front End Developer", "Content Creator", "Problem Solver"]}
              typeSpeed={60}
              backSpeed={50}
              loop
              className="text-zinc-200"
            />
            <span className="text-accent/70 ml-2">{"/>"}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-zinc-400 mt-2"
          >
            I'm a business management student who fell for code. I'm early in
            the journey — but I show up every day, build things, and get a
            little better each time.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6"
          >
            <button
              onClick={() => navigate("/project")}
              className="btn-primary"
            >
              View Projects
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="btn-outline"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex text-2xl gap-6 items-center justify-center mt-8 text-zinc-500"
          >
            <a
              href="https://github.com/anis-py19"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/izri_dev/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-highlight transition-all duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@izri_dev"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="hover:text-accent transition-all duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <FaTiktok />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
