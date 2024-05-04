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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
