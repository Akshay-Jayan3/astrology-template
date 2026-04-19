/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        themePrimary: "var(--theme-primary, #C2410C)",
        themePrimaryHover: "var(--theme-primary-hover, #9A3412)",
        themeSecondary: "var(--theme-secondary, #1F2937)",
        themeBgSoft: "var(--theme-bg-soft, #F9F6F1)",
        themeBorderSoft: "var(--theme-border-soft, #E5E7EB)",
      }
    }
  },
  plugins: []
};
