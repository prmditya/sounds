/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "var(--background)",
        "text-color": "var(--text)",
        "primary-color": "var(--primary)",
        "secondary-color": "var(--secondary)",
        "accent-color": "var(--accent)",
      },
    },
  },
  plugins: [],
};
