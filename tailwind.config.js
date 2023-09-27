/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ require("daisyui")],
  daisyui: {
    themes: [
    {light: {
      ...require("daisyui/src/theming/themes")["[data-theme=light]"],
      "primary": "#057aff",
      "primary-focus": "mediumblue",
      'base-200':'#f0f6ff',
      "base-300":"#394e6a",
      "info":"#fff",
      "error" :'#463aa1',
    } } ,
  {
    dark: {
      ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
      "primary": "#ff7ac6",
      "primary-focus": "#ff40ac",
      'base-200':'#181920',
      "base-300":"#fff",
      "info":"#1d232a",
      'secondary':'#ffb86b',
      "error" :'#bf95f9'
    }  
  }],
  },
}
