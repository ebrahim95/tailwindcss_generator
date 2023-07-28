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
    {
      pattern: /outline-[a-z]+-\d+/
    }, {
      pattern: /bg-[a-z]+-\d+/
    },

  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro"]
  }
};

module.exports = config;
