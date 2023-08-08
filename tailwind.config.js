/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {},
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ["active"],
      // ...
      borderColor: ["focus-visible", "first"],
      // ...
      textColor: ["visited", "hover"],
    },
  },
};
