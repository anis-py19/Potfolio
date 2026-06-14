/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#4f08e1",
        secondary: "#7c3aed",
        accent: "#a855f7",
        highlight: "#e879f9",
        light: "#f0abfc",
        dark: "#0d0020",
        muted: "#6b21a8",
      },

      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },

      borderRadius: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },

      blur: {
        glow: "80px",
        soft: "120px",
        heavy: "160px",
      },

      boxShadow: {
        "glow-primary": "0 0 40px rgba(79, 8, 225, 0.5)",
        "glow-accent": "0 0 40px rgba(168, 85, 247, 0.4)",
        "glow-highlight": "0 0 60px rgba(232, 121, 249, 0.4)",
        card: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        glow: {
          from: {
            opacity: "0.6",
          },
          to: {
            opacity: "1",
          },
        },
      },

      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg,#4f08e1,#e879f9)",

        "gradient-text":
          "linear-gradient(135deg,#e879f9 0%,#a855f7 50%,#4f08e1 100%)",
      },
    },
  },

  plugins: [],
};
