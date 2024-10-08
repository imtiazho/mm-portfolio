/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c0c0c0",
          secondary: "#323232",
          accent: "#dddddd",
          neutral: "#1f1f1f",
          info: "#1f1f1f",
          success: "#1f1f1f",
          warning: "#1f1f1f",
          error: "#1f1f1f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
