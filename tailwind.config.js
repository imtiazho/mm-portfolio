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
          primary: "#676767",
          secondary: "#323232",
          accent: "#5B78F6",
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
