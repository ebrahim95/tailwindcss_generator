/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  safelist: [

    {
      pattern: /p[a-z]-\d+/
    },

    {
      pattern: /border-[a-z]+-\d+/s
    },
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["fantasy"]
  }
};

module.exports = config;
