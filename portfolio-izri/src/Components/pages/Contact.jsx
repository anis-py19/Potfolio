import { FiMail } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "anisrayaneizri@gmail.com";
const INSTAGRAM_URL =
  import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/izri_dev/";
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "213780259026";

const channels = [
  {
    icon: FiMail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@izri_dev",
    href: INSTAGRAM_URL,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Message me directly",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
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

function Contact() {
  return (
    <section className="relative min-h-screen px-6 pt-32 pb-16 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-highlight/10 rounded-full blur-[100px] pointer-events-none animate-float" />

      <div className="w-full max-w-xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Let's Work Together</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-4 text-white">
            Turn your idea into a <br />
            <span className="gradient-text">real project</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-400 mt-5 leading-relaxed max-w-md mx-auto">
            Have something in mind? Reach out through any channel below and let's
            make it happen.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4 mt-12"
        >
          {channels.map(({ icon: Icon, label, value, href }) => (
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="glass-card group flex items-center gap-5 p-5 text-left bg-zinc-900/50 hover:bg-zinc-900/80 border-white/5 transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 transition-colors duration-300 group-hover:bg-accent/20 group-hover:border-accent/30 group-hover:shadow-glow-accent relative z-10">
                <Icon className="text-2xl text-zinc-400 transition-colors duration-300 group-hover:text-white" />
              </div>
              <div className="flex flex-col gap-1 overflow-hidden relative z-10">
                <span className="text-[0.7rem] uppercase tracking-wider text-zinc-500 font-semibold">
                  {label}
                </span>
                <span className="text-base font-semibold text-zinc-200 group-hover:text-white truncate transition-colors">{value}</span>
              </div>
              <div className="ml-auto w-10 h-10 flex items-center justify-center rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-4 relative z-10">
                <span className="text-white">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
