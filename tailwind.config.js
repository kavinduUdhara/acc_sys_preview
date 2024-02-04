/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./docs/*.{html,php}", // Path to your HTML files
        "./src/*.css",
        "./docs/*/*.{html,php}",     // Path to your CSS files
        // You can adjust the paths based on your actual file locations
      ],
    theme: {
      extend: {},
    },
    plugins: [],
  }