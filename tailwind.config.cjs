/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  safelist: [

    {
      pattern: /p-\d+/s
    },
    {
      pattern: /border-[a-z]+-\d+/s
    },
  ],
  plugins: [],
};

module.exports = config;
