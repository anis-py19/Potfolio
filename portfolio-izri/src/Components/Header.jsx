import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/story", label: "Story" },
    { to: "/skills", label: "Skills" },
    { to: "/project", label: "Project" },
    { to: "/vision", label: "Vision" },
  ];

  return (
    <>
      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <header
        className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-[1200px] transition-all duration-500 ${
          scrolled
            ? "bg-[#09090b]/90 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/40"
            : "bg-white/[0.03] backdrop-blur-lg border border-white/[0.05]"
        } rounded-2xl`}
      >
        <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3">
          {/* Logo */}
          <Link
            to="/"
            className="group relative flex items-center text-xl sm:text-2xl font-bold tracking-tight shrink-0"
          >
            <span className="text-white transition-colors duration-300">Anis</span>
            <span className="bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Izri
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-highlight group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white/[0.08] rounded-xl shadow-sm border border-white/[0.04]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Divider */}
            <div className="w-px h-5 bg-white/[0.1] mx-3" />

            {/* Contact CTA */}
            <button
              onClick={() => navigate("/contact")}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-primary to-accent hover:from-secondary hover:to-highlight shadow-lg shadow-primary/25 hover:shadow-accent/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Contact</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`block w-4 h-[2px] bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`block w-4 h-[2px] bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block w-4 h-[2px] bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-[#09090b]/50 rounded-b-2xl backdrop-blur-md"
            >
              <div className="h-px bg-white/[0.08] mx-4 mb-2" />
              <nav className="flex flex-col gap-1 px-3 pb-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-white bg-white/[0.08]"
                          : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="h-px bg-white/[0.08] my-2" />
                <button
                  onClick={() => {
                    navigate("/contact");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-primary to-accent hover:from-secondary hover:to-highlight shadow-lg shadow-primary/20 transition-all duration-300 active:scale-[0.98]"
                >
                  <span>Get In Touch</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;