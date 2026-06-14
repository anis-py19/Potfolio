import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <header
        className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-[1200px] transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a16]/90 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/40"
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
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Izri
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-white bg-white/[0.08] shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Divider */}
            <div className="w-px h-5 bg-white/[0.1] mx-2" />

            {/* Contact CTA */}
            <button
              onClick={() => navigate("/contact")}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-500/25 hover:shadow-fuchsia-500/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Contact</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12"
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
            className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all duration-300"
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
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="h-px bg-white/[0.08] mx-4 mb-2" />
          <nav className="flex flex-col gap-0.5 px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white bg-white/[0.08]"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
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
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-500/20 transition-all duration-300 active:scale-[0.98]"
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
        </div>
      </header>
    </>
  );
}

export default Header;