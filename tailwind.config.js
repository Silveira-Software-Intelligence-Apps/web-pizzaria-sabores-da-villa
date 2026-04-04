/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {
    colors: { primary: "#f59e0b", accent: "#dc2626" },
  }},
  plugins: [],
};
