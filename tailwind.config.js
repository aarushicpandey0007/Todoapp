module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Include the `src` directory and the `Views` folder inside it
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Views/**/*.{js,ts,jsx,tsx,mdx}",  // This line includes your App.tsx file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


