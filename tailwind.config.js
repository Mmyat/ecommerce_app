/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      "poppins": 'Poppins',
    },
    colors: {
      "primary": "#fffffe",
      "secondary": "#078080",
      "danger": "#f25042",
      "header" : "#0e172c",
      "info" : "#f9bc60",
      "warn" : "#ff8906"
    },
  },
};
export const plugins = [];

