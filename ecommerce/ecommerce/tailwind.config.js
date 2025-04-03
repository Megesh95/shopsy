/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00798c",
        secondary: "#edae49",
        accent: "#d1495b",
        tertiary: "#8f2d56",
        coral: {
          DEFAULT: "#d1495b",
          100: "#2a0f12",
          200: "#541e25",
          300: "#7e2d37",
          400: "#a83c4a",
          500: "#d1495b",
          600: "#da6f7d",
          700: "#e4959f",
          800: "#eebac1",
          900: "#f7dce0"
        },
        teal: {
          DEFAULT: "#00798c",
          100: "#00181c",
          200: "#003038",
          300: "#004854",
          400: "#006070",
          500: "#00798c",
          600: "#00a6c0",
          700: "#1ad4f4",
          800: "#6ce2f7",
          900: "#b5f0fb"
        },
        magenta: {
          DEFAULT: "#8f2d56",
          100: "#1d0911",
          200: "#3a1223",
          300: "#571b34",
          400: "#742446",
          500: "#8f2d56",
          600: "#be3c73",
          700: "#d46c99",
          800: "#e39dbd",
          900: "#f1cede"
        },
        amber: {
          DEFAULT: "#edae49",
          100: "#30220e",
          200: "#60441c",
          300: "#90662a",
          400: "#c08838",
          500: "#edae49",
          600: "#f1bf6e",
          700: "#f4cf93",
          800: "#f8dfb9",
          900: "#fbefdc"
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
