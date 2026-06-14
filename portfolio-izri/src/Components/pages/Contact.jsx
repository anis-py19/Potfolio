import { FiMail } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

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

function Contact() {
  return (
    <section className="min-h-screen px-6 pt-32 pb-16 flex flex-col items-center justify-center">
      <div className="w-full max-w-xl text-center">
        <span className="section-label">Let's Work Together</span>
        <h2 className="text-4xl md:text-5xl tracking-tight mt-3">
          Turn your idea into a{" "}
          <span className="gradient-text">real project</span>
        </h2>
        <p className="text-sm md:text-base text-white/50 mt-4 leading-relaxed">
          Have something in mind? Reach out through any channel below and let's
          make it happen.
        </p>

        <div className="flex flex-col gap-4 mt-10">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="glass-card group flex items-center gap-4 p-5 text-left"
            >
              <div className="shrink-0 w-12 h-12 rounded-md flex items-center justify-center bg-accent/10 border border-accent/20 transition-colors duration-300 group-hover:bg-accent/20">
                <Icon className="text-xl text-accent transition-colors duration-300 group-hover:text-highlight" />
              </div>
              <div className="flex flex-col gap-0.5 overflow-hidden">
                <span className="text-[0.7rem] uppercase tracking-wider text-white/30">
                  {label}
                </span>
                <span className="text-sm font-medium truncate">{value}</span>
              </div>
              <span className="ml-auto text-white/30 transition-all duration-300 group-hover:text-accent group-hover:translate-x-1">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
