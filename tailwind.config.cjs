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
      pattern: /ring-[a-z]+-\d+/
    },

    {
      pattern: /border-[a-z]+-\d+/
    },

    {
      pattern: /border-[a-z]/
    },
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["fantasy"]
  }
};

module.exports = config;
