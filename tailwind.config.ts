/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "599px",
      md: "904px",
      mdd: "1054px",
      lg: "1239px",
      xl: "1439px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        "background-primary": "#060C2C",
        "background-secondary": "#F4EFF4",
        "background-variant": "#E6E1E514",
        "background-outline": "#CAC4D0",
        "background-important": "#F2B8B5",
        "background-variant-2": "#f8f4fc",
        "background-form": "#E8DEF8",
        "text-primary": "#E7E0EC",
        "text-outline": "#1D192B",
        "text-secondary": "#6750A4",
        "text-important": "#21005D",
        "text-important-2": "#49454F",
        "text-variant": "#1C1B1F",
        "text-variant-2": "#625B71",
        "border-primary": "#B3261E",
        "border-secondary": "#79747E",
      },
    },
  },
  important: true,
  plugins: [],
};
