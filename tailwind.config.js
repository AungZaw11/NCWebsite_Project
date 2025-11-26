// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// tailwind.config.js
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         fadeInUp: {
//           "0%": { opacity: "0", transform: "translateY(20px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         fadeInDown: {
//           "0%": { opacity: "0", transform: "translateY(-20px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         growLine: {
//           "0%": { height: "0" },
//           "100%": { height: "100%" },
//         },
//       },
//       animation: {
//         fadeInUp: "fadeInUp 0.7s ease-out forwards",
//         fadeInDown: "fadeInDown 0.7s ease-out forwards",
//         fadeIn: "fadeIn 0.7s ease-out forwards",
//         growLine: "growLine 1s ease-out forwards",
//       },
//     },
//   },
//   plugins: [],
// };
