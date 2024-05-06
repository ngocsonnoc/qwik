/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        common: "var(--bg-common)",
        "dark-main": "var(--bg-dark-main)",
        "dark-secondary": "var(--bg-dark-secondary)",
        white: "var(--white)",
        "grey-primary": "var(--grey-primary)",
        "red-primary": "var(--red-primary)",
        "green-primary": "var(--green-primary)",
        "green-secondary": "var(--green-secondary)",
        "violet-primary": "var(--violet-primary)",
        "yellow-primary": "var(--yellow-primary)",
        "yellow-secondary": "var(--yellow-secondary)",
        "blue-primary": "var(--blue-primary)",
        "blue-secondary": "var(--blue-secondary)",
        "border-grey-primary": "var(--border-grey-primary)",
        "table-row-primary": "var(--table-row-primary)",
        "table-row-secondary": "var(--table-row-secondary)",
        "modal-overlay": "var(--modal-overlay)",
        pending: "var(--pending-color)",
        success: "var(--success-color)",
        cancel: "var(--cancel-color)",
        "active-route": "var(--active-route)",
        "background-5": "var(--background-5)",
        "grey-0": "var(--grey-0)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      borderWidth: {
        common: "var(--border-common)",
      },
      fontFamily: {
        common: "var(--font-family-common)",
      },
      fontSize: {
        common: "var(--font-size-common)",
      },
      boxShadow: {
        table: "box-shadow: 0px -1px 0px 0px rgba(217, 217, 217, 0.1) inset",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
