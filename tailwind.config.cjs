/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  safelist: [
    // Padding Width
    {
      pattern: /p[a-z]-\d+/
    },
    // Ring Colors
    {
      pattern: /ring-[a-z]+-\d+/
    },
    //Border Colors and Width
    {
      pattern: /border-[a-z]+-\d+/
    },
    // Border Radius, Width 
    {
      pattern: /border-[a-z]/
    },
    // Outline Colors
    {
      pattern: /outline-[a-z]+-\d+/
    },
    // Background Colors
    {
      pattern: /bg-[a-z]+-\d+/
    },
    // Shadow Colors
    {
      pattern: /shadow-[a-z]+-\d+/
    },
    {
      pattern: /brightness-\d+/
    },
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro"]
  }
};

module.exports = config;
